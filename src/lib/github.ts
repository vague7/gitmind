/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db"
import { Octokit } from "octokit"
import axios from "axios"
import { aiSummariseCommit } from "./gemini"

export const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
})

const githubUrl = 'https://github.com/docker/genai-stack'

type Response = {
    commitHash: string
    commitMessage: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: string
}

export const getCommitHashes= async (githubUrl: string): Promise<Response[]> => {
    const [owner, repo] = githubUrl.split('/').slice(-2)
    if(!owner || !repo) {
        throw new Error("Invalid GitHub URL")
    }
    const {data} = await octokit.rest.repos.listCommits({
        owner,
        repo
    })
    
    const sortedCommits = data.sort((a: any, b: any) => new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime()) as any[]

    return sortedCommits.slice(0,10).map((commit:any)=> ({
        commitHash : commit.sha as string,
        commitMessage: commit.commit.message ?? "",
        commitAuthorName: commit.commit?.author?.name ?? "",
        commitAuthorAvatar: commit?.author?.avatar_url ?? "",
        commitDate: commit.commit?.author?.date ?? ""
    }))
}
//console.log(await getCommitHashes(githubUrl))

export const pollCommits= async (projectId: string) => {
    const {project, githubUrl} = await fetchProjectGithubUrl(projectId)
    const commitHashes = await getCommitHashes(githubUrl)
    const unprocessedCommits = await filterUnprocessedCommits(projectId, commitHashes)
    const summaryResponses = await Promise.allSettled(unprocessedCommits.map(commit => {
        return summariseCommit(githubUrl, commit.commitHash)
    }))
    const summaries = summaryResponses.map((response) => {
        if (response.status === 'fulfilled'){
            return response.value // as string
        }
        return ""
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const commits = await db.commit.createMany({
        data: summaries.map((summary, index) => {
            console.log(`processing commit ${index}`)
            return {
                projectId: projectId,
                commitHash: unprocessedCommits[index]!.commitHash,
                commitMessage: unprocessedCommits[index]!.commitMessage,
                commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
                commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
                commitDate: unprocessedCommits[index]!.commitDate,
                summary: summary
            }
        })
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return commits
}

async function summariseCommit(githubUrl: string, commitHash: string){
    //get the diff , thn pass the diff into ai
    const {data} = await axios.get(`${githubUrl}/commit/${commitHash}.diff`, {
        headers: {
            Accept: 'application/vnd.github.v3.diff',
        }
    })
    return await aiSummariseCommit(data) || ""
}

async function fetchProjectGithubUrl(projectId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const project = await db.project.findUnique({
        where: { id: projectId},
        select:{
            githubUrl: true
        }
    })
    if (!project?.githubUrl){
        throw new Error("project has no githubUrl")
    }
    return { project, githubUrl: project.githubUrl }
}

async function filterUnprocessedCommits(projectId: string, commitHashes: Response[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const processedCommits = await db.commit.findMany({
        where: {projectId}
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const unprocessedCommits = commitHashes.filter((commit) => !processedCommits.some((processedCommit) => processedCommit.commitHash === commit.commitHash))
    return unprocessedCommits
}

await pollCommits("projectId").then(console.log) // Example usage, replace "projectId" with an actual project ID
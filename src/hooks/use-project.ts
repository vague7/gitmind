/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "@/trpc/react";

import { useLocalStorage}  from "usehooks-ts";

const useProject = () => {
    const { data: projects } = api.project.getProjects.useQuery();
    const [projectId, setProjectId] = useLocalStorage('gitmind-project-id', '');
    const project= projects?.find(project => project.id === projectId);


    return {
        projects,
        project,
        projectId,
        setProjectId,
    }
}

export default useProject;
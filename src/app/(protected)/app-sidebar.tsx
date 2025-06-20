/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import useProject from "@/hooks/use-project"

export function AppSidebar(){
    const router = useRouter();
    const pathname = usePathname();
    const {open} = useSidebar();
    const {projects, projectId, setProjectId}= useProject();
    const items=[{
        title:"Dashboard",
        url:"/dashboard",
        icon:LayoutDashboard
    },{
        title:"Q&A",
        url:"/qa",
        icon:Bot
    },{
        title:"Meetings",
        url:"/meetings",
        icon:Presentation
    },{
        title:"Billing",
        url:"/billing",
        icon:CreditCard
    }
]

    return (
        <Sidebar collapsible="icon" variant="floating" >
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <img src={'/favicon.ico'} alt="logo" className="size-8" />
                    {open && <h1 className="text-xl font-bold text-primary/80">GitMind</h1>}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu> 

                            {items.map((item)=>{
                                return(
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            
                                            <Link
                                                href={item.url}
                                                className={cn(
                                                    "flex items-center rounded-md transition-all",
                                                    {
                                                    "px-3 py-2 gap-2 w-full justify-start": open,
                                                    "p-2 w-[40px] justify-center": !open, // fixed width when collapsed
                                                    "!bg-primary text-white": pathname === item.url,
                                                    }
                                                )}
                                                >
                                                <item.icon className="min-w-5 min-h-5" />
                                                {open && (
                                                    <span className="truncate">{item.title}</span>
                                                )}
                                            </Link>

                                            

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                            
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu> 

                            {projects?.map((project)=>{
                                return(
                                    <SidebarMenuItem key={project.name}>
                                        <SidebarMenuButton asChild>
                                            <div onClick={()=>{
                                                setProjectId(project.id);
                                                if (pathname !== '/dashboard') {
                                                    router.push('/dashboard');
                                                }
                                            }} className={cn("cursor-pointer", {
                                                "bg-primary/20": project.id === projectId
                                            })}>
                                                <div className={cn(
                                                    'rounded-sm border size-6 -ml-1 flex items-center justify-center text-sm bg-white text-primary',
                                                    {
                                                        'bg-primary text-white': project.id === projectId
                                                    }
                                                )}>
                                                    <span className="p-3">{project.name[0]}</span>
                                                </div>
                                                    <span className={cn("transition-all truncate overflow-hidden whitespace-nowrap", 
                                                        !open && "sr-only")}>
                                                        {project.name}
                                                    </span>

                                            </div>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                            <div className="h-2"></div>
                           { open && <SidebarMenuItem>
                                <Link href={'/create'}>
                                    <Button size={"sm"} variant="outline" className="w-fit px-2">
                                        <Plus/>
                                       Create Project
                                    </Button>
                                </Link>
                            </SidebarMenuItem>}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                
            </SidebarContent>
        </Sidebar>
    )
}
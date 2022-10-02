import Link from "next/link"
import { useEffect, useState } from "react"
import { MiniProject } from "./mini"

/* 

Project data: 
{
    NFTid,
    name,
    url
}

*/
export const TaskList = () => {
    const [loc, setLoc] = useState({
        org: "Astro Club",
    })
    const [projects, setProjects] = useState([
        {
            NFTid: 1234,
            name: "Telescope",
            url: "#",
        },
    ])
    useEffect(() => {}, [])
    return (
        <div className="h-screen max-w-[330px] text-white flex flex-col overflow-auto mx-auto p-4 text-center">
            <div className="font-bold mx-2">{`${loc.org}'s projects`}</div>
            <div className="text-xs m-2">Select a task to view it</div>
            {projects.map((project, index) => (
                <MiniProject href={project.url} key={index} />
            ))}
        </div>
    )
}

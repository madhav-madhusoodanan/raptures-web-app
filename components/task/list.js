import Link from "next/link"
import { useEffect, useState } from "react"

/* 

Task data: 
{
    NFTid,
    name,
    url
}

*/
export const TaskList = () => {
    const [loc, setLoc] = useState({
        org: "Astro Club",
        project: "Telescope",
    })
    const [tasks, setTasks] = useState([
        {
            NFTid: 1234,
            name: "Work on telescope",
            url: "#",
        },
    ])
    useEffect(() => {}, [])
    return (
        <div className="h-screen max-w-[330px] text-white flex flex-col overflow-auto mx-auto p-4 text-center">
            <div className="font-bold mx-2">{`${loc.org}'s ${loc.project} tasks`}</div>
            <div className="text-xs m-2">Select a task to view it</div>
            {tasks.map((task, index) => (
                <Link href={task.url} key={index}>
                    <div
                        
                        className="w-auto font-semibold rounded p-4 bg-gray-700"
                    >
                        {task.name}
                    </div>
                </Link>
            ))}
        </div>
    )
}

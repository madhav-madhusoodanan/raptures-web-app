import { useState } from "react"
import { MiniOrganization } from "../organization/mini"
import { MiniProject } from "../project/mini"
import { MiniTask } from "../task/mini"
import { getOrgs, getProjects, getTasks } from "./functions"

const List = ({ list, category }) => {
    if (category === "orgs") {
        // orgs
        return (
            <>
                {list.map((org, index) => (
                    <MiniOrganization organization={org} key={index} />
                ))}
            </>
        )
    } else if (category === "projects") {
        // projects
        return (
            <>
                {list.map((project, index) => (
                    <MiniProject project={project} key={index} />
                ))}
            </>
        )
    } else if (category === "tasks") {
        // tasks
        return (
            <>
                {list.map((task, index) => (
                    <MiniTask organization={task} key={index} />
                ))}
            </>
        )
    }
}

export const HomeComponent = () => {
    const [orgs, setOrgs] = useState([])
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])
    const [list, setList] = useState([])
    const [homeCategory, setHomeCategory] = useState("orgs")

    const updateList = (category) => () => {
        setHomeCategory((_) => category)
        if (category === "orgs") {
            setList((_) => orgs)
        } else if (category === "projects") {
            setList((_) => projects)
        } else if (category === "tasks") {
            setList((_) => tasks)
        }
    }

    return (
        <div className="w-screen h-screen bg-slate-900">
            <div className="fixed bottom-12 left-[50%] translate-x-[-50%] translate-y-[50%] bg-yellow-400 w-[32rem] max-w-[32rem] h-12 rounded"></div>
            <div className="fixed top-1 left-[50%] translate-x-[-50%] translate-y-[50%] bg-yellow-400 w-[32rem] max-w-[32rem] h-12 rounded"></div>
            <List list={list} category={homeCategory} />
        </div>
    )
}

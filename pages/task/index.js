import { useState } from "react"
import TaskComponent from "../../components/task"

export default function Profile() {
    const [data, setData] = useState({ lmao: "ded" })
    return (
        <div className="bg-neutral-900 h-screen w-screen relative">
            <TaskComponent />
        </div>
    )
}

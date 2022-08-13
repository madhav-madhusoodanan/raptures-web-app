import { useState } from "react"
import { TaskList } from "../../components/task/list"

export default function App() {
    const [data, setData] = useState({ lmao: "ded" })
    return (
        <div className="bg-neutral-900 h-screen w-screen relative">
            <TaskList />
        </div>
    )
}

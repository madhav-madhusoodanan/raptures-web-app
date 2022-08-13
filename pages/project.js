import { useState } from "react"
// import Navbar from "../components/navbar"
import Organization from "../components/organization"
import Project from "../components/project"

export default function Profile() {
    const [data, setData] = useState({ lmao: "ded" })
    return (
        <div className="bg-neutral-900 h-screen w-screen relative">
            <Project />
        </div>
    )
}

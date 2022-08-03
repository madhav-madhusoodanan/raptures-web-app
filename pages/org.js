import { useState } from "react"
// import Navbar from "../components/navbar"
import Organization from "../components/organization"

export default function Profile() {
    const [data, setData] = useState({ lmao: "ded" })
    return (
        <div className="bg-neutral-900 h-screen w-screen relative">
            {/* <Navbar /> */}
            <Organization />
        </div>
    )
}

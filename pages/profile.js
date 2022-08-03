import { useState } from "react"
import Navbar from "../components/navbar"
import ProfileUser from "../components/profile/index"
import Modal from "../components/profile/modal"

export default function Profile() {
    const [data, setData] = useState({lmao: "ded"})
    return (
        <div className="bg-neutral-900 h-screen w-screen relative">
            <Navbar />
            <ProfileUser setData={setData} />
            <Modal data={data} />
        </div>
    )
}

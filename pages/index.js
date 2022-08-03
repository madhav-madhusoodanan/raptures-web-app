import Link from "next/link"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <div className="bg-neutral-800 w-screen h-screen grid place-items-center">
            {/* <Navbar /> */}
            <div className="flex flex-col gap-4">
                <Link href="/org">
                    <div className="text-black font-bold px-6 py-4 rounded text-center bg-slate-100">
                        Organization demo
                    </div>
                </Link>
                <Link href="/profile">
                    <div className="text-black font-bold px-6 py-4 rounded text-center bg-slate-100">
                        Profile demo
                    </div>
                </Link>
            </div>
        </div>
    )
}

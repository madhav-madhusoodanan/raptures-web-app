import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="overflow-hidden w-[300px]">
            <img src="/logo.svg" className="fixed z-10 h-8 left-4 my-auto top-4" />
            <div
                className="z-10 fixed right-0 h-full w-[300px] bg-bg navContainer transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"
                data-visible={visible}
            >
                <div className="h-full w-full relative flex flex-row">
                    <div className="w-[80px] hiddeninvisible"></div>
                    <div className="flex flex-col gap-12 pt-28 pl-8">
                        <Link href="/" className="lg:my-4">
                            <p className="text-4xl font-semibold my-4 text-white">Home</p>
                        </Link>
                        <Link href="/" className="lg:my-4">
                            <p className="text-4xl font-semibold my-4 text-white">Team</p>
                        </Link>
                        <Link href="/roadmap" className="lg:my-4">
                            <p className="text-4xl font-semibold my-4 text-white">Contact</p>
                        </Link>
                    </div>
                    <div className="absolute bottom-8 left-8 flex flex-row gap-4">
                        <a
                            href="https://twitter.com/CrazyFrogs_io"
                            className="rounded-full h-12 w-12 shadow-md shadow-black grid place-items-center"
                        >
                            <img src="/twitter.svg" className="w-4" />
                        </a>
                        <a
                            href="https://discord.com"
                            className="rounded-full h-12 w-12 shadow-md shadow-black grid place-items-center"
                        >
                            <img src="/discord.svg" className="w-4" />
                        </a>
                        <a
                            href="https://linktr.ee/crazyfrogs"
                            className="rounded-full h-12 w-12 shadow-md shadow-black grid place-items-center"
                        >
                            <img src="/linktree.svg" className="w-4" />
                        </a>
                    </div>
                    <div className="w-[80px] hiddeninvisible"></div>
                </div>
            </div>
            <div
                className="z-20 rounded-full fixed top-2 right-2  h-12 w-12 shadow-md shadow-black grid place-items-center navButton bg-neutral-900"
                onClick={() => setVisible(!visible)}
            >
                <img src="/burger.svg" className="w-4 nav:close" />
                <img src="/cross.svg" className="w-4 nav:open" />
            </div>
        </div>
    )
}

export default Navbar
import { useState } from "react"

export default function TaskComponent() {
    const [task, setTask] = useState({
        name: "Astro Club",
        about: `We’re a group of students in BITS Pilani who love
        stargazing.
        Wanna click extremely high-res starpics?
        We got them
        
        Wanna know when Jupiter is visible?
        We’ll tell you :)`,
        members: [
            {
                name: "Poza",
                url: "nothing",
                pfp: "https://i.pinimg.com/736x/eb/14/67/eb14676faf281e9dcf9491b8798f1eec.jpg",
            },
            {
                name: "Poza",
                url: "nothing",
                pfp: "https://i.pinimg.com/736x/eb/14/67/eb14676faf281e9dcf9491b8798f1eec.jpg",
            },
        ],
        announcements: [
            {
                sender: "Rajarshi Misra",
                timestamp: 123456,
                message: `Releasing pickthestars.com tomorrow 6am! 
            Can’t wait to see your reactions XD`,
            },
        ],
        incentive: "Whoever completes this, receives a rare guitar",
        status: "Active",
    })
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row align-middle lg:justify-around overflow-scroll text-white">
            <div className="w-auto h-auto lg:w-2/5 m-4 lg:m-0 flex flex-col gap-8 lg:gap-4 justify-center relative">
                <div className="w-full h-16 flex flex-col justify-center absolute top-0">
                    <p className="text-2xl font-bold ">{`Organizations > ${task.name}`}</p>
                    <div className="flex flex-row justify-start gap-4">
                        <h2 className="my-auto font-bold">Status</h2>
                        <p className="rounded px-2 py-1 bg-purple-700 text-white">
                            {task.status}
                        </p>
                    </div>
                </div>
                <div className="w-4/5 sm:3/5 md:2/5 lg:3/5 mt-24">
                    <h1 className="font-bold">Description</h1>
                    <p>{task.about}</p>
                </div>
                <div>
                    <h1 className="font-bold">Incentive</h1>
                    <div className="flex flex-row gap-2">{task.incentive}</div>
                </div>
            </div>
            <div className="w-auto h-auto lg:w-2/5 m-4 lg:m-0 flex flex-col gap-8 lg:gap-4 justify-center">
                <div>
                    <div>
                        <h1 className="font-bold">Announcements</h1>
                        {task.announcements.map((announcement, index) => (
                            <div
                                key={index}
                                className="p-2 rounded-lg bg-slate-500 w-3/5 md:w-2/5 lg:w-3/5"
                            >
                                <p className="font-bold">
                                    {announcement.sender}
                                </p>
                                <p>{announcement.message}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-black bg-white px-6 py-2 rounded w-3/5 md:w-2/5 lg:w-3/5 text-center">Commit to task</div>
                </div>
            </div>
        </div>
    )
}

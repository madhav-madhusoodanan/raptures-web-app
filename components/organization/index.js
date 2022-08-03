import { useState } from "react"

export default function Organization() {
    const [org, setOrg] = useState({
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
        projects: ["Telescope", "Outreach"],
    })
    return (
            <div className="w-full h-screen flex flex-col lg:flex-row align-middle lg:justify-around overflow-scroll text-white">
                <div className="w-auto h-auto lg:w-2/5 m-2 lg:m-0 flex flex-col gap-8 lg:gap-4 justify-center relative">
                    <div className="w-full h-16 text-2xl font-bold flex flex-col justify-center absolute top-0">
                        {`Organizations > ${org.name}`}
                    </div>
                    <div className="w-4/5 sm:3/5 md:2/5 lg:3/5 mt-16">
                        <h1 className="font-bold">About</h1>
                        <p>{org.about}</p>
                    </div>
                    <div>
                        <h1 className="font-bold">Members</h1>
                        <div className="flex flex-row gap-2">
                            {org.members
                                .filter((_, i) => i < 5)
                                .map((person, index) => (
                                    <div key={index} className="flex flex-col">
                                        <img
                                            className="rounded-full h-10 w-10"
                                            src={person.pfp}
                                        />
                                        <p className="text-center">
                                            {person.name}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="w-auto h-auto lg:w-2/5 m-2 lg:m-0 flex flex-col gap-8 lg:gap-4 justify-center">
                    <div>
                        <h1 className="font-bold">Projects</h1>
                        <div className="flex flex-row gap-2">
                            {org.projects.map((project, index) => (
                                <div key={index}>
                                    <p className="text-center px-4 py-2 rounded bg-slate-50 text-black w-min h-min">
                                        {project}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold">Announcements</h1>
                            {org.announcements.map((announcement) => (
                                <div className="p-2 rounded-lg bg-slate-500 w-3/5 md:w-2/5 lg:w-3/5">
                                    <p className="font-bold">
                                        {announcement.sender}
                                    </p>
                                    <p>{announcement.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

import { useState } from "react"
import Proof from "./poc"

export default function ProfileUser(props) {
    const { setData } = props

    const [profile, setProfile] = useState({
        name: "Rishabh Barnwal",
        profilePic: "",
        address: "0xA6705927324d083fAC7e53A8f533Cf9E5Bf714FC",
        orgs: [
            {
                name: "",
                secret: "",
            },
        ],
        NFTs: [
            {
                id: "",
                secret: "",
            },
        ],
        secrets: {
            /* orgs and projects */
        }
    })
    const [name, setName] = useState("Rishabh Barnwal")
    const [address, setAddress] = useState(
        "0xA6705927324d083fAC7e53A8f533Cf9E5Bf714FC"
    )
    const [tokens, setTokens] = useState(500)
    const [proofs, setProofs] = useState([
        {
            name: "Photog Apogee coord",
            description:
                "Manage the whole team on setting up panels and organizing the whole arrangement",
            creator: {
                name: "Dhruv Doshi",
                address: "0xA6705927324d083fAC7e53A8f533Cf9E5Bf714FC",
            },
            incentive: {
                amount: 200,
                unit: "Raptures Token",
            },
        },
        {
            name: "Photog Apogee coord",
            description:
                "Manage the whole team on setting up panels and organizing the whole arrangement",
            creator: {
                name: "Dhruv Doshi",
                address: "0xA6705927324d083fAC7e53A8f533Cf9E5Bf714FC",
            },
            incentive: {
                amount: 200,
                unit: "Raptures Token",
            },
        },
    ])

    const getOrgs = async() => {}
    const getNFTs = async() => {}

    return (
        <div className="mx-auto flex flex-col sm:flex-row sm:justify-around md:justify-center h-full text-white">
            <div className=" w-80 md:w-96 h-full mx-auto sm:mx-0 md:mx-4 sm:block my-8 sm:my-0 sm:py-4">
                <div className="w-full h-80 bg-yellow-200 rounded-lg my-1 overflow-hidden"></div>
                <div className=" w-80 mx-auto md:w-full md:mx-0 text-xl">
                    {profile.name}
                </div>
                <div className=" w-80 mx-auto md:w-full md:mx-0 text-xl">
                    {profile.address.substring(0, 10) + "..."}
                </div>
                <div className=" w-80 mx-auto md:w-full md:mx-0 text-xl">
                    <span>{tokens}</span>
                    <span className="font-semibold mx-1">Raptures Tokens</span>
                </div>
            </div>
            <div className=" w-80 md:w-96 flex flex-col h-full mx-auto sm:mx-0 md:mx-4">
                <h1 className="text-2xl font-bold text-white mt-4">
                    Proofs of Contribution
                </h1>
                <h3 className="text-white text-xs">
                    Press and hold for quick details
                </h3>
                <div className="w-full flex flex-col gap-2">
                    {proofs.map((proof, index) => (
                        <Proof key={index} data={proof} setData={setData} />
                    ))}
                </div>
            </div>
        </div>
    )
}

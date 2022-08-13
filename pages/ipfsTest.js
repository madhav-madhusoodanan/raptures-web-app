import { useEffect } from "react"
import * as IPFS from "ipfs-core"

const dataFunc = async () => {
    const time = await Date.now()
    const ipfs = await IPFS.create({ repo: "ok" + Math.random() })
    const { cid } = await ipfs.add(
        JSON.stringify({
            message: "Poza rajarshi me branwal",
        })
    )

    console.info("CID", cid)
    const resp = await fetch(`https://dweb.link/ipfs/${cid}`)
    console.log(await resp.text())
    console.log(Date.now() - time)

    /* 
    
    13 seconds tops for ipfs initial stuff
    2 seconds for repeated data

    */
    // QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf
}

export default function App() {
    useEffect(() => {
        dataFunc().then((data) => {})
    }, [])

    return <div className="h-screen w-screen bg-green-400"></div>
}

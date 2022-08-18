import { useEffect } from "react"
import * as IPFS from "ipfs-core"
// import data from "../components/utils/ipfs"

const dataFunc = async () => {
    // data.write()
    const ipfs = await IPFS.create({ repo: "ok" + Math.random() })
    /*   const { cid } = await ipfs.add(
        JSON.stringify({
            message: "Poza rajarshi me branwal subhrmait" + Math.random(),
        })
    )

    console.info("CID", cid) */
    const time = Date.now()
    // const resp = await fetch(`https://dweb.link/ipfs/${cid}`)
    const data = await ipfs.cat(
        "QmcGV8fimB7aeBxnDqr7bSSLUWLeyFKUukGqDhWnvriQ3T"
    )
    let rawData = []
    for await (let data1 of data) {
        rawData.push(data1)
    }
    const totalLen = rawData.reduce((total, elem) => total + elem.length)
    const processedData = new Uint8Array(totalLen)
    let currentLen = 0
    for (let i = 0; i < rawData.length; i++) {
        processedData.set(rawData[i], currentLen)
        currentLen += rawData[i].length
        rawData[i] = undefined
    }

    const sentence = String.fromCharCode.apply(String, processedData)

    console.log("Data read back via ipfs.cat:", sentence)
    console.log(Date.now() - time)
    console.log(ipfs)

}

export default function App() {
    useEffect(() => {
        dataFunc().then((data) => {})
    }, [])

    return <div className="h-screen w-screen bg-green-400"></div>
}

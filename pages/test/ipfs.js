import { useEffect } from "react"
import dataHandler from "../../components/utils/ipfs"


const dataFuncNew = async() => {
    const cid = await dataHandler.write("loooooooooooollllll")
    const data = await dataHandler.read(cid)

    console.log(data)
}

export default function App() {
    useEffect(() => {
        dataFuncNew().then(() => {})
    }, [])

    return <div className="h-screen w-screen bg-green-400"></div>
}

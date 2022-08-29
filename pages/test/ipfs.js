import { useEffect } from "react"
import dataHandler from "../../components/utils/ipfs"

const dataFuncNew = async () => {
    const cid = await dataHandler.write("subhramit")
    console.info(cid.toString())
    const data = await dataHandler.read(cid.toString())
    console.log(data)
}

// QmSXCHSsFWnXo93VJTtRTNGogsz9Jm3ApDm6Di4axkfNWm -> "subhramit"
export default function App() {
    useEffect(() => {
        dataFuncNew().then(() => {})
    }, [])

    return <div className="h-screen w-screen bg-green-400"></div>
}

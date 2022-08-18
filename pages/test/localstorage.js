import { useEffect } from "react"
import { createAccount } from "../../components/utils/encryption"

export default function App() {
    useEffect(() => {
        createAccount("12345").then(() => {})
    }, [])

    return <div className="h-screen w-screen bg-green-400"></div>
}

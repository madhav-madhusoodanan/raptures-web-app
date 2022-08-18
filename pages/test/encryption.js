// const encrypt = require("asymmetric-encryption")
// import encrypt from "asymmetric-encryption"
const encrypt = require("asymmetric-encryption")
import { useEffect } from "react"
import { ec } from "elliptic"

const fun = () => {
    const { publicKey, privateKey, passphrase } = encrypt.generateKeyPairSync()
    // Generate keys
    console.log(publicKey)
    console.log(publicKey)
    const message = "message"

    const enc = encrypt.encrypt(publicKey, message)
    const dec = encrypt.decrypt(privateKey, enc)

    console.log(publicKey)
    console.log(privateKey)
    console.log(passphrase)
    console.log(dec)
}
export default function App() {
    useEffect(() => {
        fun()
    }, [])

    return <div></div>
}

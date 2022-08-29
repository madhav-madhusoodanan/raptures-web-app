const { ethers } = require("ethers")
const { concat, toUtf8Bytes, keccak256, recoverAddress } = require("ethers/lib/utils")

const main = async () => {
    const wallet = ethers.Wallet.createRandom()
    const sign1 = await wallet.signMessage("lmao")
    const sign2 = await wallet.signMessage("lmaolmao")

    console.log(sign1)
    console.log(sign2)
    console.log(sign1 === sign2)
}

const signature = async () => {
    const wallet = ethers.Wallet.createRandom()
    const message = "lmao"
    const sign1 = await wallet.signMessage(message)
    const address = recoverAddress(
        keccak256(
            concat([
                toUtf8Bytes("\x19Ethereum Signed Message:\n"),
                toUtf8Bytes(String(message.length)),
                toUtf8Bytes(message),
            ])
        ),
        sign1
    )
    console.log(wallet.address === address)
    console.log(address)
}
signature().then()

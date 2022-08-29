const { Sha256 } = require("@aws-crypto/sha256-js")

const Hash = async (...data) => {
    const hash = new Sha256()
    data.forEach((elem) => hash.update(elem))

    // this identifies the ipfs namespace of profile data
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    return byts32rep
}

const main = async () => {
    console.log(await Hash("abc", "def"))
    console.log(await Hash("abcdef"))
}

main().then(() => {})

const { Sha256 } = require("@aws-crypto/sha256-js")

const Hash = async (...data) => {
    const hash = new Sha256()
    data.forEach((elem) => hash.update(elem))

    // this identifies the ipfs namespace of profile data
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    return byts32rep
}
const encrypt = async (data, key) => {
    const hasher = new Sha256()
    hasher.update(key)
    const hashed = await hasher.digest()

    const output = [...data].map((x, i) =>
        String.fromCharCode(x.charCodeAt(0) ^ hashed[i % hashed.length])
    )
    return output.join('')
}

const decrypt = async (cipher, key) => {
    const hasher = new Sha256()
    hasher.update(key)
    const hashed = await hasher.digest()

    const output = [...cipher].map((x, i) =>
        String.fromCharCode(x.charCodeAt(0) ^ hashed[i % hashed.length])
    )

    return output.join('')
}
const main = async () => {
 	const hash = new Sha256()
    	hash.update("2r3n093gu06um[sdfset3451-vm 6u- `")

    	// this identifies the ipfs namespace of profile data
    	const elem = await hash.digest()
    	console.log(elem)
}

main().then(() => {})

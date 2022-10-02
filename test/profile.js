const { Sha256 } = require("@aws-crypto/sha256-js")
const encrypt = async (data, key) => {
    const hasher = new Sha256()
    hasher.update(key)
    const hashed = await hasher.digest()

    const output = [...data].map((x, i) =>
        String.fromCharCode(x.charCodeAt(0) + hashed[i % hashed.length])
    )
    return output.join("")
    // return data
}
const profile = {
    name: "sushant priyam",
    secret: {
        org: "",
        profile: "",
    },
}
const main = async () => {
    const password = "123"
    const encryptProfile = {
        ...profile,
        secret: await encrypt(JSON.stringify(profile.secret), password),
    }
    console.log(encryptProfile)
}
main()

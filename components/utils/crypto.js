import { Sha256 } from "@aws-crypto/sha256-js"



export const Hash = async(...data) => {
    const hash = new Sha256()
    data.forEach(elem => hash.update(elem))
    
    // this identifies the ipfs namespace of profile data
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    return byts32rep
}

export const NamespaceGen = async(...data) => {
    return await Hash(await Hash(...data))
}

export const encrypt = async (data, key) => {
    const hasher = new Sha256()
    hasher.update(key)
    const hashed = await hasher.digest()

    const output = [...data].map((x, i) =>
        String.fromCharCode(x.charCodeAt(0) + hashed[i % hashed.length])
    )
    return output.join('')
}

export const decrypt = async (cipher, key) => {
    const hasher = new Sha256()
    hasher.update(key)
    const hashed = await hasher.digest()

    const output = [...cipher].map((x, i) =>
        String.fromCharCode(x.charCodeAt(0) - hashed[i % hashed.length])
    )

    return output.join('')
}

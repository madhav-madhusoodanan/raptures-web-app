import { Sha256 } from "@aws-crypto/sha256-js"

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

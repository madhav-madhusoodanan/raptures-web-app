import { Sha256 } from "@aws-crypto/sha256-js"
import { ethers } from "ethers"
import ls from "localstorage-slim"
import EthCrypto from "eth-crypto"
import dataHandler from "./ipfs"
import { nanoid } from 'nanoid'

export const createMainAccount = async (password) => {
    ls.config.encrypt = true
    ls.config.secret = password

    const hash = new Sha256()
    hash.update(password)
    const privateKey = await hash.digest()

    const wallet = new ethers.Wallet(privateKey)
    ls.set("raptures-secret-key", password)

    /* this necessary kya */
    const encryptedWallet = await wallet.encrypt(password)
    ls.set("raptures-wallet", JSON.stringify(encryptedWallet))
    console.log("completed")
}

export const createCommAccount = async (password, extraPassword, signature) => {
    /* private key is the hash of signature of password, already given as signature */
    /* signatures must never be stored anywhere */

    ls.config.encrypt = true
    ls.config.secret = password

    const wallet = await ethers.Wallet.fromEncryptedJson(
        JSON.parse(ls.get("raptures-wallet")),
        password
    )
    const address = EthCrypto.recover(
        signature,
        EthCrypto.hash.keccak256(password)
    )
    if (address !== wallet.address) return null

    const hash = new Sha256()
    hash.update(signature)
    const privateKey = await hash.digest()
    // const publicKey = EthCrypto.publicKeyByPrivateKey(privateKey)

    ls.config.secret = password + extraPassword
    ls.set("raptures-secret-comm-key", Buffer.from(privateKey).toString("hex"))
}

// now go to IPFS's getProfile function
export const getProfile = async (password, extraPassword) => {
    // query the user profile from the bytes32 section in smart contract
    const hash = new Sha256()
    hash.update(password)
    hash.update(extraPassword)

    // this identifies the ipfs namespace of profile data
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    const cid = await dataHandler.get(byts32rep)
    if (cid == "") return undefined
    const encryptProfile = await dataHandler.read(cid)

    // using ls to decrypt the data
    localStorage.setItem("raptures-temp-profile", encryptProfile)
    ls.config.secret = password + extraPassword
    const profile = JSON.parse(ls.get("raptures-temp-profile"))
    localStorage.removeItem("raptures-temp-profile")
    return profile
}

export const setProfile = (password, extraPassword, profile) => {
    ls.config.secret = password + extraPassword
    ls.set("raptures-temp-profile", JSON.stringify(profile))
    const encryptProfile = localStorage.getItem("raptures-temp-profile")
    localStorage.removeItem("raptures-temp-profile")

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptProfile)

    // store cid in namespace
    const hash = new Sha256()
    hash.update(password)
    hash.update(extraPassword)
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    await dataHandler.put(byts32rep, cid)
    
}

export const createOrganization = () => {
    // create secret and return it
    // make the default org data
    const orgSecret = nanoid()
    const defaultOrgData = {name: "", mambers: [], announcements: [], projects: [], secret: orgSecret}

    // store the org secret in profile

    ls.config.secret = orgSecret
    ls.set("raptures-temp-org", JSON.stringify(defaultOrgData))
    const encryptOrg = localStorage.getItem("raptures-temp-org")
    localStorage.removeItem("raptures-temp-org")

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const hash = new Sha256()
    hash.update(orgSecret)
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    await dataHandler.put(byts32rep, cid)
}

export const updateOrganization = (org) => {
    // create secret and return it

    ls.config.secret = org.secret
    ls.set("raptures-temp-org", JSON.stringify(org))
    const encryptOrg = localStorage.getItem("raptures-temp-org")
    localStorage.removeItem("raptures-temp-org")

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const hash = new Sha256()
    hash.update(org.secret)
    const byts32rep = Buffer.from(await hash.digest()).toString("hex")
    await dataHandler.put(byts32rep, cid)
}

export const 

import { Sha256 } from "@aws-crypto/sha256-js"
import { ethers } from "ethers"
import ls from "localstorage-slim"
import EthCrypto from "eth-crypto"
import dataHandler from "./ipfs"
import executor from "./execution"
import { encrypt, Hash, NamespaceGen } from "./crypto"

export const createMainAccount = async (password) => {
    const hash = new Sha256()
    hash.update(password)
    const privateKey = await hash.digest()

    const wallet = new ethers.Wallet(privateKey)

    /* this necessary kya */
    const encryptedWallet = await wallet.encrypt(password)
    localStorage.setItem("raptures-wallet", JSON.stringify(encryptedWallet))
    console.log("completed")
}

export const createCommAccount = async (password, extraPassword, signature) => {
    /* private key is the hash of signature of password, already given as signature */
    /* signatures must never be stored anywhere */

    const wallet = await ethers.Wallet.fromEncryptedJson(
        JSON.parse(localStorage.getItem("raptures-wallet")),
        password
    )
    const address = EthCrypto.recover(
        signature,
        EthCrypto.hash.keccak256(password)
    )
    if (address !== wallet.address) return null

    const privateKey = await Hash(signature)
    const privateKeyEncrypt = await encrypt(privateKey, password + extraPassword)
    localStorage.setItem("raptures-secret-comm-key", privateKeyEncrypt)
}

// now go to IPFS's getProfile function
export const getProfile = async (address) => {
    // query the user profile from the bytes32 section in smart contract
    return executor.getProfile(address)
}

export const setProfile = async(password, extraPassword, profile) => {

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptProfile)

    // store cid in namespace
    const byts32rep = await NamespaceGen(password, extraPassword)
    await dataHandler.put(byts32rep, cid)
    
}

export const acceptToken = async(TokenSecret) => {
    // this needs a notification event for any secret sharing stuff
    // extract secret from the message,
    // SHA256 the taskSecret to get the token id and namespace
    // get the token details by decrypting the ipfs cid (from namespace) using taskSecret
    // and then, depending on willingness, make the secret public by updating an API with the secrets

    // update profile using the new secret
}
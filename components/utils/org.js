import { Sha256 } from "@aws-crypto/sha256-js"
import dataHandler from "./ipfs"
import { nanoid } from 'nanoid'
import { Hash } from "./profile"
import { decrypt, encrypt } from "./base"

export const createOrganization = async(profile) => {
    // create secret and return it
    // make the default org data
    const orgSecret = nanoid()
    const defaultOrgData = {name: "", members: [], announcements: [], projects: [], secret: orgSecret}

    // store the org secret in profile
    profile.organizations.push({[defaultOrgData.name]: orgSecret})
    const encryptOrg = await encrypt(JSON.stringify(defaultOrgData), orgSecret)


    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const byts32rep = Hash(orgSecret)
    await dataHandler.put(byts32rep, cid)
    return profile
}

export const readOrganization = async(orgSecret) => {
    const byts32rep = Hash(orgSecret)

    const cid = await dataHandler.get(byts32rep)
    if (cid == "") return undefined
    const encryptOrg = await dataHandler.read(cid)

    const org = JSON.parse(await decrypt(encryptOrg, orgSecret))
    return org
}

export const updateOrganization = (org) => {
    // create secret and return it

    const encryptOrg = await encrypt(JSON.stringify(defaultOrgData), orgSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const byts32rep = Hash(org.secret)
    await dataHandler.put(byts32rep, cid)
}

export const deleteOrganization = (orgSecret) => {
    const byts32rep = Hash(orgSecret)
    await dataHandler.put(byts32rep, "")
}

import dataHandler from "./ipfs"
import { nanoid } from "nanoid"
import { Hash, NamespaceGen } from "./crypto"
import { decrypt, encrypt } from "./crypto"

export const createOrganization = async (profile) => {
    // create secret and return it
    // make the default org data
    const orgSecret = nanoid()
    const defaultOrgData = {
        name: "",
        members: [],
        announcements: [],
        projects: [],
        secret: orgSecret,
    }

    // store the org secret in profile
    profile.organizations.push({ name: defaultOrgData.name, secret: orgSecret })
    const encryptOrg = await encrypt(JSON.stringify(defaultOrgData), orgSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const byts32rep = await NamespaceGen(orgSecret)
    await dataHandler.put(byts32rep, cid)
    return profile
}

export const readOrganization = async (orgSecret) => {
    const byts32rep = await NamespaceGen(orgSecret)

    const cid = await dataHandler.get(byts32rep)
    if (cid == "") return undefined
    const encryptOrg = await dataHandler.read(cid)

    const org = JSON.parse(await decrypt(encryptOrg, orgSecret))
    return org
}

export const updateOrganization = async (org) => {
    // create secret and return it

    const encryptOrg = await encrypt(JSON.stringify(defaultOrgData), orgSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptOrg)

    const byts32rep = await NamespaceGen(org.secret)
    await dataHandler.put(byts32rep, cid)
}

export const deleteOrganization = async (orgSecret) => {
    const byts32rep = await NamespaceGen(orgSecret)
    await dataHandler.put(byts32rep, "")
}

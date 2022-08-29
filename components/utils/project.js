import dataHandler from "./ipfs"
import { nanoid } from "nanoid"
import { Hash, NamespaceGen } from "./crypto"

export const createProject = async (org) => {
    // create secret and return it
    // make the default org data
    const projSecret = nanoid()
    const defaultProjData = {
        name: "",
        members: [],
        announcements: [],
        tasks: [],
        secret: projSecret,
    }

    // store the org secret in profile
    org.projects.push({ name: defaultProjData.name, secret: projSecret })

    const encryptProj = await encrypt(
        JSON.stringify(defaultProjData),
        projSecret
    )

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptProj)

    const byts32rep = await NamespaceGen(projSecret)
    await dataHandler.put(byts32rep, cid)
    return org
}

export const readProject = async (projSecret) => {
    const byts32rep = await NamespaceGen(projSecret)

    const cid = await dataHandler.get(byts32rep)
    if (cid == "") return undefined
    const encryptProj = await dataHandler.read(cid)

    const project = JSON.parse(await decrypt(encryptProj, projSecret))
    return project
}

export const updateProject = async (project) => {
    // create secret and return it

    const encryptoProj = await encrypt(JSON.stringify(project), project.secret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptoProj)

    const byts32rep = await NamespaceGen(project.secret)
    await dataHandler.put(byts32rep, cid)
}

export const deleteProject = async (projSecret) => {
    const byts32rep = await NamespaceGen(projSecret)
    await dataHandler.put(byts32rep, "")
}

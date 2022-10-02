import dataHandler from "./ipfs"
import { nanoid } from 'nanoid'
import { Hash, NamespaceGen } from "./crypto"
import executor from "./execution"

export const createForm = async() => {
    // create secret and return it
    // make the default form data
    const formSecret = nanoid()
    const defaultFormData = {name: "", secret: formSecret}

    const encryptForm = await encrypt(JSON.stringify(defaultFormData), formSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptForm)

    const byts32rep = await NamespaceGen(formSecret)
    await executor.put(byts32rep, cid)
    return defaultFormData
}

export const readForm = async(formSecret) => {
    const byts32rep = await NamespaceGen(formSecret)
    
    const cid = await executor.get(byts32rep)
    if (cid == "") return undefined
    const encryptForm = await dataHandler.read(cid)
    
    const form = await decrypt(JSON.stringify(encryptForm), formSecret)

    return form
}

export const updateForm = async(form) => {
    // create secret and return it

    const encryptForm = await encrypt(JSON.stringify(form), form.secret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptForm)

    const byts32rep = await NamespaceGen(form.secret)
    await executor.put(byts32rep, cid)
}

export const deleteForm = async(formSecret) => {
    const byts32rep = await NamespaceGen(formSecret)
    await executor.put(byts32rep, "")
}

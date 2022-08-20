import dataHandler from "./ipfs"
import { nanoid } from 'nanoid'
import { Hash } from "./profile"

export const createForm = async() => {
    // create secret and return it
    // make the default form data
    const formSecret = nanoid()
    const defaultFormData = {name: "", secret: formSecret}

    const encryptForm = await encrypt(JSON.stringify(defaultFormData), formSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptForm)

    const byts32rep = await Hash(formSecret)
    await dataHandler.put(byts32rep, cid)
    return defaultFormData
}

export const readForm = async(formSecret) => {
    const byts32rep = await Hash(formSecret)
    
    const cid = await dataHandler.get(byts32rep)
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

    const byts32rep = await Hash(form.secret)
    await dataHandler.put(byts32rep, cid)
}

export const deleteForm = async(formSecret) => {
    const byts32rep = await Hash(formSecret)
    await dataHandler.put(byts32rep, "")
}

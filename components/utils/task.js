import dataHandler from "./ipfs"
import { nanoid } from 'nanoid'
import { Hash } from "./profile"

export const createTask = async(project) => {
    // create secret and return it
    // make the default project data
    const taskSecret = nanoid()
    const defaultTaskData = {name: "", members: [], announcements: [], tasks: [], secret: taskSecret}

    // store the project secret in profile
    project.tasks.push({[defaultTaskData.name]: taskSecret})

    const encryptTask = await encrypt(JSON.stringify(defaultTaskData), taskSecret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptTask)

    const byts32rep = await Hash(taskSecret)
    await dataHandler.put(byts32rep, cid)
    return project
}

export const readTask = async(taskSecret) => {
    const byts32rep = await Hash(taskSecret)
    
    const cid = await dataHandler.get(byts32rep)
    if (cid == "") return undefined
    const encryptTask = await dataHandler.read(cid)
    
    const task = await decrypt(JSON.stringify(encryptTask), taskSecret)

    return task
}

export const updateTask = async(task) => {
    // create secret and return it

    const encryptTask = await encrypt(JSON.stringify(task), task.secret)

    // store on ipfs and get cid
    const cid = await dataHandler.write(encryptTask)

    const byts32rep = await Hash(task.secret)
    await dataHandler.put(byts32rep, cid)
}

export const deleteTask = async(taskSecret) => {
    const byts32rep = await Hash(taskSecret)
    await dataHandler.put(byts32rep, "")
}

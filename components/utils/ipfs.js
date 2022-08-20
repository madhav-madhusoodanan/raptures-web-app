/* 

the link for any data is
`https://dweb.link/ipfs/${cid}`


test cid: QmcGV8fimB7aeBxnDqr7bSSLUWLeyFKUukGqDhWnvriQ3T
*/
import { ethers } from "ethers"
import * as IPFS from "ipfs-core"
import { ABI, KNOWHERE, provider } from "./abi"

class DataHandler {
    handler
    knowhere
    isInitialized
    constructor() {
    	this.isInitialized = false
    }
    async initialize() {
        this.knowhere = new ethers.Contract(KNOWHERE, ABI, provider)
        this.handler = await IPFS.create({ repo: "ok" + Math.random() })
        this.isInitialized = true
        console.log("CONSTRUCTED!")
    }
    async write(data) {
    	if(!this.isInitialized) await this.initialize()
        const { cid } = await this.handler.add(data)
        return cid
    }
    async put(namespace, data) {
        const tx = await this.knowhere.update(namespace, data)
        await tx.wait()
    }
    async pin(cid, namespace) {
        /* 
        
        1. check for permission
        2. check if namespace has been created or deleted latest
        3. create and pin if it does not exist
        4. update it if it does 
        
        */
    }
    async get(namespace) {
        if(!this.isInitialized) await this.initialize()
        return await this.knowhere.read(namespace)
    }
    async read(cid) {
    	const time = Date.now()
    	if(!this.isInitialized) await this.initialize()
        let rawData = []
        const data = await this.handler.cat(cid)
        for await (let data1 of data) {
            rawData.push(data1)
        }
        if (typeof rawData[0] === "string") {
                	console.log(Date.now() - time)
            return this.interpretString(rawData)
        } else if (typeof rawData[0] === "object") {
        	console.log(Date.now() - time)
            return this.interpretBytes(rawData)
        }
    }
    interpretBytes(rawData) {
        const totalLen = rawData.reduce((total, elem) => total + elem.length)
        const processedData = new Uint8Array(totalLen)
        let currentLen = 0
        for (let i = 0; i < rawData.length; i++) {
            processedData.set(rawData[i], currentLen)
            currentLen += rawData[i].length
            rawData[i] = undefined
        }

        const sentence = String.fromCharCode.apply(String, processedData)
        return sentence
    }
    interpretString(data) {
        return data.reduce((prev, curr) => (prev += curr))
    }
}
const dataHandler = new DataHandler()
dataHandler

export default dataHandler

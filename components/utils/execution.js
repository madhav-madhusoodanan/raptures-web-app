/* 

the link for any data is
`https://dweb.link/ipfs/${cid}`


test cid: QmcGV8fimB7aeBxnDqr7bSSLUWLeyFKUukGqDhWnvriQ3T
*/
import { BigNumber, ethers } from "ethers"
import { ABI, KNOWHERE, provider } from "./abi"

class Executor {
    knowhere
    rapturesContract
    constructor() {
        this.knowhere = new ethers.Contract(KNOWHERE, ABI, provider)
        console.log("CONSTRUCTED!")
    }
    async put(namespace, data) {
        const tx = await this.knowhere.update(namespace, data)
        await tx.wait()
    }

    async get(namespace) {
        if (!this.isInitialized) await this.initialize()
        return await this.knowhere.read(namespace)
    }
    async createToken(target, id, amount) {
        await this.knowhere.notify(`Create;${id};${amount}`, target)
        try {
            const tx = await this.rapturesContract.mint(
                target,
                BigNumber.from(id),
                BigNumber.from(amount),
                []
            )
            await tx.wait()
            return true
        } catch (error) {
            return false
        }
    }
    async createSoulToken(target, id) {
        const tx = await this.rapturesContract.mint(
            target,
            BigNumber.from(id),
            BigNumber.from(1),
            []
        )
        await tx.wait()
    }
    async transferToken(from, to, id, amount) {
        await token.safeTransferFrom(
            from,
            to,
            BigNumber.from(id),
            BigNumber.from(amount),
            []
        )
    }
    async getNotifications(type) {
        /* create array of latest block numbers */
        /* 
        1. Token creation (all tasks come in here)
        2. Token transaction
        3. Org creation
        4. project creation
        5. Custom msgs
        */
        const blockNumbers = []
        const filterFromMe = this.knowhere.filters.Notification(addr0.address, blockNumbers)
        const logs = await kh.queryFilter(filterFromMe)
        return logs
    }
}
const executor = new Executor()
executor

export default executor

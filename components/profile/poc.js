/* 
    data type of #props
    {
        name: "Photog Apogee coord",
        description:
            "Manage the whole team on setting up panels and organizing the whole arrangement",
        creator: {
            name: "Dhruv Doshi",
            address: "0xA6705927324d083fAC7e53A8f533Cf9E5Bf714FC",
        },
        incentive: {
            amount: 200,
            unit: "Raptures Token",
        },
    }
*/
export default function Proof(props) {
    const { setData, data } = props
    const openModal = () => setData(data)
    const closeModal = () => setData(undefined)
    return (
        <div
            className="rounded border-violet-600 border-2 flex flex-row h-12 bg-neutral-800 w-full gap-4"
            onMouseDown={openModal}
            onMouseUp={closeModal}
            onTouchStart={openModal}
            onTouchEnd={closeModal}
        >
            <div className="h-full w-12 bg-yellow-400"></div>
            <p className="text-white my-auto">{data.name}</p>
        </div>
    )
}

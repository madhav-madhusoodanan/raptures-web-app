export default function Modal(props) {
    const { data } = props
    try {
        console.log("modalllll")
        return (
            <div className="absolute inset-0 top-0 translate-y-[50%] w-80 gap-2 bg-slate-300 rounded mx-auto flex flex-col h-min p-2">
                <p className="text-center text-xl">{data.name}</p>
                <div>
                    <h2 className="text-xl font-bold">Description</h2>
                    <p>{data.description}</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Created by</h2>
                    <p>
                        <span>{data.creator.name}</span>
                        <span className="font-bold mx-1 underline">{data.creator.address.substring(0, 10)}</span>
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Incentive</h2>
                    <p>
                        <span>{data.incentive.amount}</span>
                        <span className="font-bold mx-1">{data.incentive.unit}</span>
                    </p>
                </div>
            </div>
        )
    } catch(e) {
    }
}

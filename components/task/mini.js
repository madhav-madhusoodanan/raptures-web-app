import Link from "next/link"

export const MiniTask = ({task}) => {
    return (
        <Link href={task.url}>
            <div className="w-auto font-semibold rounded p-4 bg-gray-700">
                {task.name}
            </div>
        </Link>
    )
}

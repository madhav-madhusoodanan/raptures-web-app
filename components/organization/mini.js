export const MiniOrganization = ({ organization }) => {
    return (
        <div className="w-full rounded flex flex-col gap-2 p-2">
            <p className="font-bold">{organization.name}</p>
            <p className="text-sm text-gray-300">{organization.creator}</p>
        </div>
    )
}

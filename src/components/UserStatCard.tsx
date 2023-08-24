const UserStatCard: React.FC<{name: string, number: number, style: string}> = (props) => {
    return (
        <div className={`w-40 h-40 rounded-3xl ${props.style} text-left text-theme-black p-4`}>
            <div className="h-full flex flex-col justify-between">
                <h2 className="text-5xl font-bold">{props.number}</h2>
                <div className="font-bold">{props.name}</div>
            </div>
        </div>
    )
}

export default UserStatCard
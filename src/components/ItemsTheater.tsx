import Link from "next/link"

export default function ItemsTheater(props:any) {
    const { name, date, time, seats, place } = props

    return <Link href={`/play/${props.id}`} className="border border-blue-200 p-4 rounded-lg shadow-lg shadow-blue-400 flex flex-col justify-between gap-2 bg-white">
        <h2 className="text-lg text-center font-semibold">{ name }</h2>
        <div className="flex flex-col gap-1">
            <span className="w-full flex flex-row justify-around px-2">
                <span>{ date}</span>
                <span>{ time}</span>
            </span>
            <span className="mx-auto border border-blue-400 py-0 px-5 rounded-md text-blue-400">{ place }</span>
            <div className="flex flex-row justify-end">
                <span className="text-blue-500 flex flex-row gap-1 items-center">
                    <label>{ seats }</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </span>
            </div>
        </div>
    </Link>

}
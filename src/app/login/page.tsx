"use client"
import { useState, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import ClientModel from "@/tools/models/ClientModel"

export default function Login() {
    const router = useRouter()
    const [idClient, setIdClient] = useState('')
    const handlerClick = async () => {
        const [user] = await ClientModel.search('name', idClient)
        if( user ) {
            localStorage.setItem('user', idClient)
            const playId = localStorage.getItem('playId')
            router.push(`/play/${playId}`)
        }
    }

    const handlerChange = (event:ChangeEvent<HTMLInputElement>) => {
        setIdClient(event.target.value)
    }

    return <form className="flex flex-col gap-4 p-10 bg-white rounded">
        <label>ID de Usuario</label>
        <input className="py-1 px-5 rounded border border-blue-400" type="text" placeholder="username" value={idClient} onChange={handlerChange}/>
        <button type="button" onClick={handlerClick} className="bg-blue-500 text-white py-1 px-4 rounded">Login</button>
    </form>
}
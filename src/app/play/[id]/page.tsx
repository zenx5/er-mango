"use client"

import Quantity from "@/components/Quantity"
import PlayModel from "@/tools/models/PlayModel"
import SellModel from "@/tools/models/SellModel"
import ClientModel from "@/tools/models/ClientModel"
import { useRouter } from "next/navigation"
import { useEffect, useState, FormEvent } from "react"

const STEPS = {
    SEATS: 0,
    CONFIRM: 1
}

export default function PlayItem({ params }:{params:{id:string}}) {
    const { id } = params
    const router = useRouter()
    const [playTheater, setPlayTheater ]= useState<PlayInterface>()
    const [quantity, setQuantity] = useState(0)
    const [step, setStep] = useState(0)
    useEffect(()=>{
        (async()=>{
            const userId = localStorage.getItem('user') as string
            const [user] = await ClientModel.search('name', userId)
            if( !user ) {
                localStorage.setItem('playId', id)
                router.push('/login')
            }
            setPlayTheater( await PlayModel.get(id) as PlayInterface )
        })()
    },[id, router])


    const handlerQuantity = (value:number, max:number) => {
        if( value < 0 ) return
        if( value > max ) return
        setQuantity(value)
    }

    const handlerSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if ( playTheater?.seats ) {
            const token = Date.now()+Math.floor(Math.random()*2+100).toString()
            await SellModel.post({
                play: playTheater?.name,
                place: playTheater?.place,
                seats: quantity,
                token: token,
                createAt: new Date().toLocaleDateString()
            })

            await PlayModel.put(id, {
                ...playTheater,
                seats: playTheater?.seats - quantity
            })
            const response = await SellModel.search('token', token)
            router.push(`/order/${response[0].id}`)
        }
    }

    return playTheater && <form className="flex flex-col gap-4 p-10 bg-white rounded" onSubmit={handlerSubmit}>
        <span>Obra: {playTheater.name}</span>
        {step===STEPS.SEATS && <span className="flex flex-col">
            <label className="font-bold opacity-70">Numero de entradas:</label>

            <Quantity value={quantity} max={playTheater.seats} onChange={handlerQuantity}/>
        </span>}
        {step===STEPS.CONFIRM && <span className="flex flex-col ">
            <label className="w-full text-center font-bold opacity-70">Confirmar compra:</label>
            <span className="w-full text-center">{ quantity } entradas</span>
            <span className="w-full text-center">Total: { quantity * 100 }</span>
        </span>}
        <span className="flex flex-row justify-center">
            {step===STEPS.CONFIRM && <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded">Enviar</button>}
            {step===STEPS.SEATS && <button type="button" disabled={quantity===0} onClick={()=>setStep(prev => prev + 1)} className="bg-blue-500 text-white py-1 px-4 rounded disabled:bg-slate-400">Continuar</button>}
        </span>
    </form>

}
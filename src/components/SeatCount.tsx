"use client"
import PlayModel from "@/tools/models/PlayModel"
import { useEffect, useState } from "react"
export default function SeatCount({ id }: { id: string }) {
    const [seats, setSteats] = useState(0)
    useEffect(()=>{
        PlayModel.onSnap( async (data:PlayInterface) => {
            setSteats( data.seats )
        }, id)
    },[id])
    return <label>{seats}</label>
}
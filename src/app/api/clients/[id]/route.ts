import ClientModel from "@/tools/models/ClientModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{ params }:{ params:{id:string} }){
    const { id } = params
    
    const data = await ClientModel.get(id)

    return NextResponse.json({
        data:data,
        message:'Client with '+id,
        status:200
    })
}


export async function PUT(request:NextRequest,{ params }:{ params:{id:string} }){
    const { id } = params
    const data = await request.json()
    const result = await ClientModel.get({
        id:id,
        ...data
    })

    return NextResponse.json({
        message: result ? 'Client updated' : 'Client not found',
        status:200
    })
}
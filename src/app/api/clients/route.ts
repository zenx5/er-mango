import ClientModel from "@/tools/models/ClientModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const data = await ClientModel.get()

    return NextResponse.json({
        data:data,
        message:'List of clients',
        status:200
    })
}


export async function POST(request:NextRequest){
    const data = await request.json()
    const result = await ClientModel.post(data)

    return NextResponse.json({
        message: result ? 'Client created' : 'Client not created',
        status:200
    })
}
import SellModel from "@/tools/models/SellModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const data = await SellModel.get()

    return NextResponse.json({
        data:data,
        message:'List of clients',
        status:200
    })
}


export async function POST(request:NextRequest){
    const data = await request.json()
    const result = await SellModel.post(data)

    return NextResponse.json({
        message: result ? 'Client created' : 'Client not created',
        status:200
    })
}
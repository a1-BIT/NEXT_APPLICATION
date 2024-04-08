import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../../../prisma/client";

export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1, name: "milk", price: 30},
        {id: 2, name: "biscut", price: 10}
    ])
}

export async function POST(request:NextRequest) {
    const body = await request.json()
    const validation  = schema.safeParse(body)
    if(!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})

    const product = await prisma.product.findUnique({
        where : {name: body.name}
    })

    if(product)
    NextResponse.json({error: 'Product already exist'}, {status: 400})

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(newProduct,{status: 201})
}   
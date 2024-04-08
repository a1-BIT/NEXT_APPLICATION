import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import schema from "../schema";

export async function GET(request: NextRequest,{params}: {params: {id: string}}){
    const data = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!data)
    return NextResponse.json({error: 'User Not Found'},{status: 400})
    return NextResponse.json(data)
}
export async function PUT(request: NextRequest, {params}: {params: {id: string}}){
    const body = await request.json()
    const validation = schema.safeParse(body)

    if(!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400})

    const user = await prisma.user.findUnique({where: {id: parseInt(params.id)}})
    if(!user)
    return NextResponse.json({error: 'User Not Exist'},{status: 400})

   const updatedUser =  await prisma.user.update({
        where: {id: parseInt(params.id)},
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser)

}
export async function DELETE(request:NextRequest, {params}: {params: {id: string}}) {
        const body = await request.json()

        const user = prisma.user.findUnique({where: {id: parseInt(params.id)}})
        if(!user)
        return NextResponse.json({error: 'No User Found'}, {status: 404})

        await prisma.user.delete({where: {id: parseInt(params.id)}})

        return NextResponse.json({message: 'User Deleted'})

       

        
}
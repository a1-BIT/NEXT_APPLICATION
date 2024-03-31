import { NextRequest, NextResponse } from "next/server";


export function GET(){
        return NextResponse.json([
            {id: 1, name: 'amit'},
            {id: 2, name: 'Peter'},
            {id: 3, name: 'Abhi'}
        ])
}

export async function POST(request: NextRequest){
        const body = await request.json()
        const {name} = body
        if(!name)
        return NextResponse.json({error: 'No Data found'},{status: 400})
        return NextResponse.json({name},{status: 201})
}
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1, name: "milk", price: 30},
        {id: 2, name: "biscut", price: 10}
    ])
}
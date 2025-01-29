import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//Get single Product
export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    try {
        const user = await db.user.findUnique({
            where:{
                id
            }
        })
        return NextResponse.json({
            user,
            message: "fetched User",
            error: null
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            user:null,
            error:"something went wrong"
        },{
            status:500
        })
    }
}

//PUT METHOD
export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const user = await request.json()
    try {
        const updatedUser = await db.user.update({
            where:{
                id
            },
            data:user
        })
        return NextResponse.json({
            user:updatedUser,
            message: "updated",
            error:null
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            user:null,
            error:"something went wrong"
        },{
            status:500
        })
    }
}

//DELETE
export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    try {
        const user = await db.user.findFirst({
            where:{
                id
            }
        })
        if(!user){
            return NextResponse.json({
                message:"user doesn't exist"
            })
        }
        await db.user.delete({
            where:{
                id
            }  
        })
        return NextResponse.json({
            message:'deleted',
            error:null
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'failed to delete',
            error:'something went wrong'
        },{
            status:500
        })
    }
    
}
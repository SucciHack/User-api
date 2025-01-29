import { UserData } from "@/components/register-form";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//POST METHOD
export async function POST(request:NextRequest){
    try {
        const data:UserData = await request.json()
        const createdUser = await db.user.create({
            data:{
                firstName: data.firstName,
                lastName:  data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password : data.password,
                comfirmPassword: data.comfirmPassword,
                address : data.address,
                postCode : data.postCode,
            }
        })
        return NextResponse.json({
            createdUser,
            message:"created",
            error: null
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error: "something went wrong"
        },{
            status:500
        })
    }
}

//GET METHOD
export async function GET(){
    try {
        const users = await db.user.findMany()
        return NextResponse.json({
            users,
            message:"fetched",
            error:null
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            data:null,
            error:"something went wrong"
        },{
            status:500
        })
    }
}
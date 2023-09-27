import { NextRequest, NextResponse } from "next/server";
import SimpleForm from "@/models/simpleForm";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(NextRequest){
    try {
        const formData = await SimpleForm.find(); 

        return NextResponse.json({
          message: "",
          formData,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}

export async function POST(NextRequest){
    try {
        // console.log(await NextRequest);
        // return NextResponse.json({
        //     message: "json is not parsed yet",
        //     success: false,            
        // });
        const reqBody = await NextRequest.json();
        const {zip, is_home_owner, address, email, full_name, phone, message} = reqBody;
        const newForm = new SimpleForm({
            zip,
            is_home_owner,
            address,
            email,
            full_name,
            phone,
            message
        })

        // Save product in db
        const savedForm = await newForm.save();
        
        return NextResponse.json({
            message: "Data Saved successfully",
            success: true,
            savedForm
        })
    }
    catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false,
        })
    }
}
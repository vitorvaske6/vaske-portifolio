import { sendMail } from "@/services/emailProvider";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    const email = await request.json()

    const result = await sendMail(email.subject, email.sendTo, email.content)

    if(result){
        return NextResponse.json({ code: 200, message: 'E-mail sent successfully' }, {status: 200})
    }

    return NextResponse.json({ code: 401, message: 'E-mail was not sent successfully please try again.'}, {status: 401})

}
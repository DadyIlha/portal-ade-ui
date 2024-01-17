import axios from "axios";
// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

import { UserLogin } from "@/app/interfaces/UserLogin";
import { UserLoginRequest } from "@/app/interfaces/UserLoginRequest";


export async function POST(req: UserLoginRequest) {
    let user: UserLogin = await req.json();
    const userNameBase64 = Buffer.from(user?.username).toString("base64");
    const passwordBase64 = Buffer.from(user?.password).toString("base64");
    try {
        const headers = {
            "Authorization": `Bearer ${(await axios.post(`${process.env.LOCALAPI_PROTOCOL}://${process.env.LOCALAPI_URL}:${process.env.LOCALAPI_PORT}/api/userApi/getToken`, {
                "clientId": process.env.CLIENT_ID,
                "apiKey": process.env.API_KEY
            })).data}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        };

        var result = (await axios.post(`${process.env.API_BASE_URL}/${process.env.DATABASE}/users/userLogin `, {
            username: userNameBase64, password: passwordBase64
        },
            {
                headers: headers
            }))?.data;
    }
    catch (e) {
        result = null;
    }
    if (!result) return NextResponse.json(false);

    return NextResponse.json(result);
}

import axios from "axios";
import { Route } from "lucide-react";

// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";
 
export async function POST(req: NextRequest) {
    var url: string = process.env.NEXT_PUBLIC_BI_AUTH0_URL!;
    var body = {
        grant_type: "password",
        scope: "openid",
        resource: "https://analysis.windows.net/powerbi/api",
        client_id: (await req.json())?.client_id,
        username: process.env.NEXT_PUBLIC_BI_USUARIO,
        password: process.env.NEXT_PUBLIC_BI_SENHA,
    };
    var headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    var token = (await axios.post(
        url,
        body,
        {
            headers: headers
        }

    )).data.access_token;
    // var b = await req.json();
    return NextResponse.json(`Bearer ${token}`);
}

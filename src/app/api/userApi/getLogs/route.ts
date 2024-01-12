import axios from "axios";
import { Route } from "lucide-react";
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const pageNumber =  parseInt(req.nextUrl.searchParams.get("pageNumber") as string);
    const pageSize =  parseInt(req.nextUrl.searchParams.get("pageSize") as string);
    const headers = {
        "Authorization": `Bearer ${(await axios.post(`${req.nextUrl.protocol}//${req.nextUrl.host}/api/userApi/getToken`, {
            "clientId": process.env.NEXT_PUBLIC_CLIENT_ID,
            "apiKey": process.env.NEXT_PUBLIC_API_KEY
        })).data}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    };
    const results: Relatorios = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_DATABASE}/users/GetLogsPaged`,
        {
            headers: headers,
            params: {
                pageNumber : pageNumber,
                pageSize : pageSize
            }
        }
    ))?.data;
    return NextResponse.json(results);
}

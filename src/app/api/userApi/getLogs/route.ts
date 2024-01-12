import axios from "axios";
import { Route } from "lucide-react";
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const pageNumber =  parseInt(req.nextUrl.searchParams.get("pageNumber") as string);
    const pageSize =  parseInt(req.nextUrl.searchParams.get("pageSize") as string);
    const headers = {
        "Authorization": `Bearer ${(await axios.post(`${process.env.LOCALAPI_PROTOCOL}://${process.env.LOCALAPI_URL}:${process.env.LOCALAPI_PORT}/api/userApi/getToken`, {
            "clientId": process.env.CLIENT_ID,
            "apiKey": process.env.API_KEY
        })).data}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    };
    const results: Relatorios = (await axios.get(`${process.env.API_BASE_URL}/${process.env.DATABASE}/users/GetLogsPaged`,
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

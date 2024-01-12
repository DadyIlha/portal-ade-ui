import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return NextResponse.json((await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/" + process.env.NEXT_PUBLIC_DATABASE + "/users/login",
    {
      "clientId": process.env.NEXT_PUBLIC_CLIENT_ID,
      "apiKey": process.env.NEXT_PUBLIC_API_KEY
    },
    {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    }
  )).data?.token);
}
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const response = NextResponse.json(
    (
      await axios.post(
        process.env.API_BASE_URL + "/" + process.env.DATABASE + "/users/login",
        {
          clientId: process.env.CLIENT_ID,
          apiKey: process.env.API_KEY,
        },
        {
          timeout: 60000,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
        }
      )
    ).data?.token
  )

  console.log(response)
  return response
}

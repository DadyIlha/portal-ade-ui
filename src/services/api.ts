import axios from "axios";
import { he } from "date-fns/locale";


async function GetToken() {
  return (await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/" + process.env.NEXT_PUBLIC_DATABASE + "/users/login",
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
  )).data?.token;
}

async function GetLogs(pageNumber: number, pageSize: number): Promise<Relatorios> {
  const results = (await axios.get(`${process.env.NEXT_PUBLIC_LOCALAPIBASEURL}/userApi/getLogs`
  ,{
    params: {
      pageNumber,
      pageSize
    }
  })).data
  return results;
}

export const api = axios.create({
  baseURL: "http://localhost:5000/seducpa",
})

export { GetLogs,GetToken }
import axios from "axios";
import { he } from "date-fns/locale";


async function GetToken(){
  return (await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/" + process.env.NEXT_PUBLIC_DATABASE + "/users/login",
  {
    "clientId" : process.env.NEXT_PUBLIC_CLIENT_ID,
    "apiKey" : process.env.NEXT_PUBLIC_API_KEY
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  }
  )).data?.token;
}

async function GetLogs(pageNumber: number, pageSize: number) : Promise<Relatorios> {
    const headers = {
      "Authorization" : `Bearer ${await GetToken()}`,
    };
    const results : Relatorios = (await axios.get(`
      ${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_DATABASE}/users/GetLogsPaged`,
      {
        headers: headers,
        params: {
          pageNumber,
          pageSize
        }
      }
    ))?.data;
   return results;
}

export const api = axios.create({
  baseURL: "http://localhost:5000/seducpa",
})

export {GetToken, GetLogs}
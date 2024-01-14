import axios from "axios";
import { he } from "date-fns/locale";



async function GetLogs(pageNumber: number, pageSize: number): Promise<Relatorios> {
  const results = (await axios.get(`/api/userApi/getLogs`
  ,{
    timeout: 120000,
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

export { GetLogs }
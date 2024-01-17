import axios from "axios";



async function GetLogs(pageNumber: number, pageSize: number): Promise<Relatorios> {
  const results = (await axios.get(`/api/userApi/getLogs`
    , {
      timeout: 120000,
      params: {
        pageNumber,
        pageSize
      }
    })).data
  return results;
}
async function Login(username: string, password: string) {
  // console.log(username);
  const results = (await axios.post(`/api/userApi/login`,
    {
      username,
      password
    }
  ))?.data
  return results;
}


export { GetLogs, Login }
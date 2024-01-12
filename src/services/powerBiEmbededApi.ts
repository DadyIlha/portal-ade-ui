import axios from "axios";

export async function getReportToken() {
    return (await axios.post(`/api/powerBiApi/token`)).data;
}
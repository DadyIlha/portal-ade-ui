import axios from "axios";

export async function getReportToken() {
    return (await axios.get(`/api/powerBiApi/token`)).data;
}
import axios from "axios";

export async function getReportToken() {
    // var token: string = (await axios.post(`/api/powerBiApi/accessToken`)).data;

    return (await axios.post(`/api/powerBiApi/token`, {
    }))?.data;
}
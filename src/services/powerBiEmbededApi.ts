import axios from "axios";

export async function getReportToken() {
    return (await axios.post(`${process.env.NEXT_PUBLIC_LOCALAPI_PROTOCOL}://${process.env.NEXT_PUBLIC_LOCALAPI_URL}:${process.env.NEXT_PUBLIC_LOCALAPI_PORT}/api/powerBiApi/token`, {
        "clientId": process.env.NEXT_PUBLIC_APPLICATION_ID,
        "groupId": process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_GROUP_ID,
        "reportId": process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_REPORT_ID
    })).data;
}
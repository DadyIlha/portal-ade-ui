
import axios, { AxiosHeaders } from "axios";
import { Route } from "lucide-react";
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    var body = await req.json();
    var clientId: string = body.clientId;
    var groupId: string = body.groupId;
    var reportId: string = body.reportId;
    var token: string = (await axios.post(`${req.nextUrl.protocol}//${req.nextUrl.host}/api/powerBiApi/accessToken`, {
        client_id: clientId
    })).data;
    var url: string = `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}/GenerateToken`;
    var headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": token
    };
    var reportToken = (await axios.post(url, {
        "accessLevel": "View",
        "allowSaveAs": "false"
    }, {
        headers: headers
    })).data;
    // var b = await req.json();
    return NextResponse.json(reportToken.token);
}

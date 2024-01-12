"use server";
import axios, { AxiosHeaders } from "axios";
import { Route } from "lucide-react";
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    var body = {
        "clientId": process.env.APPLICATION_ID,
        "groupId": process.env.SEMED_DADOSGERAIS_GROUP_ID,
        "reportId": process.env.SEMED_DADOSGERAIS_REPORT_ID
    }
    var bodyReq = await req.json();
    var clientId: string | undefined = body.clientId;
    var groupId: string | undefined = body.groupId;
    var reportId: string | undefined = body.reportId;
    
    var url: string = `https://api.powerbi.com/v1.0/myorg/groups/${groupId}/reports/${reportId}/GenerateToken`;
    var headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": bodyReq.token
    };
    var reportToken = (await axios.post(url, {
        "accessLevel": "View",
        "allowSaveAs": "false"
    }, {
        headers: headers
    })).data;
    // var b = await req.json();
    return NextResponse.json(reportToken);
}

"use client"
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

import {getReportToken} from '@/services/powerBiEmbededApi';
import { useEffect, useState } from 'react';

function Report(props: any){
  return <PowerBIEmbed 
  embedConfig={{
    type: 'report',   // Supported types: report, dashboard, tile, visual, qna and paginated report
    id: process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_REPORT_ID,
    embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_REPORT_ID}&groupId=${process.env.NEXT_PUBLIC_SEMED_DADOSGERAIS_GROUP_ID}`,
    accessToken: props.token,    // Keep as empty string, null or undefined
    tokenType: models.TokenType.Embed
  }}
/>
}


export default function Home() {
  const [token, setToken] = useState('');
  useEffect(() =>
  {
    const GetToken = async () => {setToken(await getReportToken()); console.log(token); };
    GetToken();
  }, []);
  return (<div className='w-screen h-screen'>

    {<Report token={token}/>}
  </div>
  );
}

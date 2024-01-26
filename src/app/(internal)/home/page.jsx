"use client";
// import "./powerbi.css";
// import {dynamic} from "react";
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';

import {getReportToken} from "@/services/powerBiEmbededApi";

 const PowerBIEmbed = dynamic(() => import("@/components/ui/report"), {
  ssr: false,
  loading: () => <p>Loading...</p>
 });



export default function Home() {
  
  const [token, setToken] = useState('');
  // const [report, setReport] = useState<Report>();
  useEffect(() => {
    const GetToken = async () => { setToken(await getReportToken()); };
    GetToken();
  }, []);
  return (
    <div>
      {<PowerBIEmbed token={token} />}
    </div>
  );
}

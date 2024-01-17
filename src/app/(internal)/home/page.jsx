"use client";
// import "./powerbi.css";
// import {dynamic} from "react";
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react';

import { getReportToken } from "@/services/powerBiEmbededApi";

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

  function Fullscreen() {
    const fullscreen = document.fullscreenElement;
    const p = document.getElementById("pbi");
    if (!fullscreen) {
      p.requestFullscreen();
    }
    p.exitFullscreen();
  }

  const pbi = useRef(null);
  return (
    <div id="pbi" ref={pbi}>
      {<PowerBIEmbed token={token} />}
      <button id="myLink" onClick={() => Fullscreen()}>Fullscreen</button>
    </div>
  );
}

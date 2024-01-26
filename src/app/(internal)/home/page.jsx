"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

import { getReportToken } from "@/services/powerBiEmbededApi"

const PowerBIEmbed = dynamic(() => import("@/components/ui/report"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  const [token, setToken] = useState("")

  useEffect(() => {
    const getToken = async () => {
      setToken(await getReportToken())
    }
    getToken()
  }, [])

  function requestFullscreen() {
    const fullscreen = document.fullscreenElement
    const p = document.getElementById("pbi")
    if (!fullscreen) {
      p.requestFullscreen()
    }
    p.exitFullscreen()
  }

  const pbi = useRef(null)
  return (
    <div id="pbi" ref={pbi}>
      {<PowerBIEmbed token={token} />}
      <button id="myLink" onClick={() => requestFullscreen()}>
        Fullscreen
      </button>
    </div>
  )
}

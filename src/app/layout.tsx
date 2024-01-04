import "./globals.css"

import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Sistema ADE",
  description: "Sistema de correção de prova",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt br">
      <body className={`${poppins.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}

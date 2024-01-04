import { ReactNode } from "react"

import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-1 flex-col lg:flex-row lg:overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 overflow-auto px-4 py-8 pr-[calc(35px+5rem-22rem)] lg:py-20 lg:pl-[22rem]">
        {children}
      </div>
    </div>
  )
}

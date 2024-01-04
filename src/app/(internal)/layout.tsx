import { ReactNode } from "react"

import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-1">
      <Sidebar />

      {children}
    </div>
  )
}

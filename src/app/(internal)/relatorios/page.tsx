"use client"

import { ColumnDef } from "@tanstack/table-core"
import { format } from "date-fns"
import { ArrowUpDown } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"
import { GetLogs, GetToken, api } from "@/services/api"



const iconClassName = "h-4 w-4"

const columns: ColumnDef<Relatorio>[] = [
  {
    accessorKey: "Nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className={iconClassName} />
        </Button>
      )
    },
  },
  {
    accessorKey: "Grupo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Grupo
          <ArrowUpDown className={iconClassName} />
        </Button>
      )
    },
  },
  {
    accessorKey: "QtdAcesso",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantidade de Acessos
          <ArrowUpDown className={iconClassName} />
        </Button>
      )
    },
  },
  {
    accessorKey: "UltimoAcesso",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Último Acesso
          <ArrowUpDown className={iconClassName} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("UltimoAcesso"))

      const formattedDate = format(date, "dd/MM/yyyy")
      const formattedTime = format(date, "kk:mm:ss")

      return (
        <div className="flex flex-col">
          {formattedDate} {formattedTime}
        </div>
      )
    },
  },
]

export default function Reports() {
  const [users, setUsers] = useState<Relatorio[]>([])

  useEffect(() => {
    // api.get("/users").then(({ data }) => {
    //   setUsers(data)
    // })
    GetLogs(1, 1000).then(r => setUsers(r.result));
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-[90vw] lg:max-w-[unset]">
        <h1 className="text-xl font-bold text-cyan-700 lg:text-3xl">
          Relatórios de Acessos
        </h1>
        <p className="text-sm text-gray-500 lg:text-base">
          Os dados de acesso considerados para o relatório foram coletados a
          partir da data 03/03/2022.
        </p>
      </div>

      <Separator />

      <DataTable columns={columns} data={users} />
    </div>
  )
}

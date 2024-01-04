"use client"
import {
  Exam,
  Files,
  Fingerprint,
  GraduationCap,
  House,
  Info,
  List,
  SignOut,
} from "@phosphor-icons/react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

const links = [
  {
    label: "Início",
    href: "/",
    Icon: House,
  },
  {
    label: "TRI",
    href: "/tri",
    Icon: GraduationCap,
  },
  {
    label: "Relatório de Acesso",
    href: "/relatorios",
    Icon: Fingerprint,
  },
  {
    label: "Documentos ADE",
    href: "/documentos",
    Icon: Files,
  },
  {
    label: "Manual",
    href: "/manual",
    Icon: Info,
  },
]

const footerLinks = [
  {
    label: "Gestão de Avaliação",
    href: "/gestão",
    Icon: Exam,
  },
  {
    label: "Sair",
    href: "/",
    Icon: SignOut,
  },
]

export function Sidebar() {
  return (
    <>
      <div className="flex w-full lg:hidden">
        <header className="flex w-full items-center justify-between border-b p-8">
          <div className="flex items-baseline gap-4">
            <Image
              className="w-20"
              src="/assets/Logo-DadyIlha.svg"
              alt="Logo DadyIlha Soluções Integradas"
              width={93}
              height={60}
            />
            <Image
              className="w-20"
              src="/assets/Logo-Manaus.svg"
              alt="Brasão da Prefeitura de Manaus"
              width={94}
              height={80}
            />
          </div>

          <Drawer>
            <DrawerTrigger>
              <List size={24} />
            </DrawerTrigger>
            <DrawerContent className="gap-8 px-8">
              <ul className="text-xl text-cyan-500">
                {[...links, ...footerLinks].map(({ label, href, Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 pb-5 text-cyan-600 last-of-type:text-red-500"
                  >
                    <Icon className="cursor-pointer" size={35} />
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </header>
      </div>

      <div className="fixed left-0 top-0 hidden lg:flex">
        <aside className="group h-screen w-[calc(35px+5rem)] overflow-hidden border-r shadow-sm transition-all duration-500 hover:w-auto">
          <nav className="flex h-full w-80 flex-1 flex-col bg-slate-50">
            <div className="flex flex-1 flex-col">
              <div className="flex min-h-[220px] w-full flex-col items-baseline gap-8 px-4 py-8 group-hover:flex-row group-hover:items-center group-hover:justify-center">
                <Image
                  className="w-20"
                  src="/assets/Logo-DadyIlha.svg"
                  alt="Logo DadyIlha Soluções Integradas"
                  width={93}
                  height={60}
                />
                <Image
                  className="w-20"
                  src="/assets/Logo-Manaus.svg"
                  alt="Brasão da Prefeitura de Manaus"
                  width={94}
                  height={80}
                />
              </div>

              <span className="h-1 w-auto bg-sky-100" />

              <div className="h-5/6 w-auto justify-items-start p-8">
                <ul className="text-xl text-cyan-500">
                  {links.map(({ label, href, Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-4 rounded-sm pb-5 duration-200 hover:text-cyan-700"
                    >
                      <Icon className="cursor-pointer" size={35} />
                      <a
                        className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8">
                <ul className="flex-col text-xl">
                  {footerLinks.map(({ label, href, Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-4 pb-5 text-cyan-500 duration-200 last-of-type:text-red-500 hover:text-cyan-700 hover:last-of-type:text-red-700"
                    >
                      <Icon size={35} />
                      <a
                        className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}

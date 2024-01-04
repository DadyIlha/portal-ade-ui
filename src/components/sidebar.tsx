"use client"
import {
  Exam,
  Files,
  Fingerprint,
  GraduationCap,
  House,
  Info,
  SignOut,
} from "@phosphor-icons/react"
import Image from "next/image"

export function Sidebar() {
  return (
    <aside className="group sticky h-screen w-[calc(35px+5rem)] overflow-hidden shadow-sm transition-all hover:w-auto">
      <nav className="flex h-full w-80 flex-1 flex-col bg-slate-50">
        <div className="flex flex-1 flex-col">
          <div className="flex w-full flex-col gap-8 px-4 py-8">
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
              <li className="flex items-center gap-4 rounded-sm pb-5 hover:text-cyan-700">
                <House className="cursor-pointer" size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100 "
                  href="/"
                >
                  Início
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5 hover:text-cyan-700">
                <GraduationCap className="cursor-pointer" size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100  "
                  href="/"
                >
                  TRI
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5 hover:text-cyan-700">
                <Fingerprint className="cursor-pointer" size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100 "
                  href="/"
                >
                  Relatório de Acesso
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5 hover:text-cyan-700">
                <Files className="cursor-pointer" size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100 "
                  href="/"
                >
                  Documentos ADE
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5 hover:text-cyan-700">
                <Info className="cursor-pointer" size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100 "
                  href="/"
                >
                  Manual
                </a>
              </li>
            </ul>
          </div>

          <div className="p-8">
            <ul className="flex-col text-xl">
              <li className="flex items-center gap-4 pb-5 text-cyan-600">
                <Exam size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  Gestão de Avaliação
                </a>
              </li>

              <li className="flex items-center gap-4 pb-5 text-red-600">
                <SignOut size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href=""
                >
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  )
}

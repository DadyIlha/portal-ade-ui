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
    <aside>
      <div className="group sticky h-screen w-[calc(35px+5rem)] overflow-hidden shadow-sm transition-all hover:w-auto">
        <nav className=" relative top-20 flex h-5/6 w-80 flex-col rounded-3xl bg-slate-50">
          <div className="mx-auto flex h-48 w-full  justify-center gap-10">
            <Image
              src="../assets/Logo-DadyIlha.svg"
              alt="Logo DadyIlha Soluções Integradas"
              width={93}
              height={60}
            />
            <Image
              src="../assets/Logo-Manaus.svg"
              alt="Brasão da Prefeitura de Manaus"
              width={94}
              height={80}
            />
          </div>
          <span className="h-1 w-auto bg-sky-100" />

          <div className="relative mx-auto h-5/6 w-auto  justify-items-start ">
            <ul className="relative top-10 text-xl text-cyan-600">
              <li className="flex items-center gap-4 rounded-sm pb-5 ">
                <House size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  Início
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5">
                <GraduationCap size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  TRI
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5">
                <Fingerprint size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  Relatório de Acesso
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5">
                <Files size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  Documentos ADE
                </a>
              </li>
              <li className="flex items-center gap-4 pb-5">
                <Info size={35} />
                <a
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  href="/"
                >
                  Manual
                </a>
              </li>
            </ul>
          </div>
          <div className=" group relative left-5 w-auto">
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
        </nav>
      </div>
    </aside>
  )
}

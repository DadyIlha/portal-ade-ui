"use client"
import Image from "next/image"
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react"

import { Login } from "@/services/api"

import { UserLogin } from "./interfaces/UserLogin";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/");
  //   }
  // });
  function login(username: string, password: string) {
    Login(username, password).then(u => {
      if (u) {

        router.push("/home");
      }
    }).catch();
  }


  return (
    <div className="flex ">
      <Image
        src="/Imagem-home.png"
        alt="Porfessor é aluno sorrindo"
        width={840}
        height={1024}
      />
      <div className="grid h-full w-full grid-cols-2 gap-40">
        <Image
          className="relative left-52 top-20"
          src="./assets/Logo-Manaus.svg"
          alt="Brasão da Perfeitura de Manaus"
          width={200}
          height={170}
        />
        <Image
          className="relative right-10 top-24"
          src="./assets/Logo-DadyIlha.svg"
          alt="Brasão da Perfeitura de Manaus"
          width={235}
          height={144}
        />
        <section>
          <h1 className="--font-roboto relative left-2/3 top-10 col-span-2 text-6xl font-semibold text-cyan-800">
            Sistema ADE
          </h1>
          <form className="relative left-2/3 top-20 col-span-2">
            <div className="block">
              <label
                className="--font-poppins relative text-lg font-medium text-slate-700"
                htmlFor="/"
              >
                Email
              </label>
              <input
                className="--font-roboto mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="text"
                id="email"
                value={userName}
                name="email"
                placeholder="contato@email.com"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="block pt-5">
              <label
                className="--font-poppins relative text-lg font-medium text-slate-700"
                htmlFor="/"
              >
                Senha
              </label>
              <input
                className="--font-roboto mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                type="password"
                id="key"
                placeholder="*******"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <span className="border-b-2 border-slate-300 text-xs text-slate-400 hover:border-cyan-600 hover:text-cyan-600">
                <a href="/">esqueci minha senha</a>
              </span>
            </div>
            <button className="focus:ring- --font-roboto relative top-2 mt-5 block w-2/3 rounded-md border border-slate-300 bg-white px-2 py-3 font-medium text-slate-400 placeholder-slate-400 shadow-sm hover:border-sky-500 hover:text-sky-800 hover:ring-sky-500 focus:outline-none sm:text-base"
              onClick={() => login(userName, userPassword)}
              formAction={() => null}
            >
              Acessar
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

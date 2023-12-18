"use client"
import {
  Exam,
  Files,
  Fingerprint,
  GraduationCap,
  House,
  Info,
  SignOut
} from '@phosphor-icons/react';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside>
      <div 
      className="h-screen sticky shadow-sm  border-r ">
      <nav className=" relative top-20 w-80 h-5/6  flex rounded-3xl flex-col bg-slate-50 hover:w-24'">
        <div className="mx-auto gap-10 flex justify-center  w-full h-48">
          <Image
            src="../assets/Logo-DadyIlha.svg"
            alt='Logo DadyIlha Soluções Integradas'
            width={93} 
            height={60}
          />
          <Image 
            src="../assets/Logo-Manaus.svg"
            alt='Brasão da Prefeitura de Manaus' 
            width={94} 
            height={80}
          /> 
        </div>
          <span className="content-center bg-sky-100 h-1 w-auto"></span>
        <div className="mx-auto relative w-72 left-5 h-5/6 justify-items-start">
          <ul className='top-10 relative text-xl text-cyan-600 '>
            <li className="flex pb-5 gap-4 items-center hover:bg-cyan-900 rounded-sm "><House size={35}/><a href="/">Início</a></li>
            <li className="left-0 flex pb-5 gap-4 items-center hover:text-cyan-900"><GraduationCap size={35} /><a href="/">TRI</a></li>
            <li className="flex pb-5 gap-4 items-center hover:text-cyan-900"><Fingerprint size={35}/><a href="/">Relatório de Acesso</a></li>
            <li className="flex pb-5 gap-4 items-center hover:text-cyan-900"><Files size={35}/><a href="/">Documentos ADE</a></li>
            <li className="flex pb-5 gap-4 items-center hover:text-cyan-900"><Info size={35}/><a href="/">Manual</a></li>
          </ul>
        </div>
        <div className=' relative w-auto left-5'>
            <ul className='text-xl flex-col'>
              <li className="flex pb-5 gap-4 items-center text-cyan-600"><Exam size={35}/><a href="">Gestão de Avaliação</a></li>
              <li className="flex pb-5 gap-4 items-center text-red-600"><SignOut size={35}/><a href="">Sair</a></li>
            </ul>
        </div>
      </nav>
      </div>
    </aside>
  )
}
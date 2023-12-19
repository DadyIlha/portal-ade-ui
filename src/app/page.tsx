import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex '>
      <Image 
        src='/Imagem-home.png'
        alt='Porfessor é aluno sorrindo'
        width={840} 
        height={1024}
      />
      <div className='grid grid-cols-2 gap-40 h-full w-full'>
          <Image
            className='relative left-52 top-20' 
            src='./assets/Logo-Manaus.svg'
            alt='Brasão da Perfeitura de Manaus'
            width={200}
            height={170} 
          />
          <Image
            className='relative right-10 top-24'
            src='./assets/Logo-DadyIlha.svg'
            alt='Brasão da Perfeitura de Manaus'
            width={235}
            height={144} 
          />
          <section>
            <h1 className='relative top-10 left-2/3 col-span-2 text-6xl text-cyan-800 font-semibold --font-roboto'>Sistema ADE</h1>
              <form className='relative top-20 left-2/3 col-span-2'>
                  <div className='block'>
                    <label className='--font-poppins relative text-lg font-medium text-slate-700' htmlFor="/">Email</label>
                    <input className='mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 --font-roboto' type="email" id="email" name="email" placeholder="contato@email.com" />
                  </div>
                  <div className='block pt-5'>
                  <label className='--font-poppins relative text-lg font-medium text-slate-700' htmlFor="/">Senha</label>
                    <input className='mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 --font-roboto' type="senha" id="key" placeholder="*******" />
                    <span className='text-xs text-slate-400 border-b-2 border-slate-300 hover:border-cyan-600 hover:text-cyan-600'><a href="/">esqueci minha senha</a></span>
                  </div>
                  <button className='relative top-2 mt-5 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none hover:border-sky-500 hover:ring-sky-500 hover:text-sky-800 block w-2/3 rounded-md sm:text-base focus:ring- font-medium text-slate-400 --font-roboto'>Acessar</button>
              </form>
          </section>
      </div>

    </div>
  )
}

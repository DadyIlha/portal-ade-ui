"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Spinner } from "@phosphor-icons/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { setTokenData, setUser } from "@/redux/slices/auth-slice"
import { useAppDispatch } from "@/redux/store"
import { handleLogin } from "@/services/api"

const schema = z.object({
  username: z.string({
    required_error: "Por favor, digite seu usuário",
  }),
  password: z.string({
    required_error: "Por favor, digite sua senha",
  }),
})

type FormValues = z.infer<typeof schema>

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = async ({
    username,
    password,
  }) => {
    setIsLoading(true)

    try {
      const response = await handleLogin({
        username,
        password,
      })

      if (!response) {
        console.log("deu merda")
        toast.error("Erro no servidor")
        return
      }

      const { userData, tokenData } = response

      if (!userData) {
        dispatch(setUser(null))
        dispatch(setTokenData(null))

        toast.error("Usuário ou senha incorretos")
        return
      }

      dispatch(setUser(userData))
      dispatch(setTokenData(tokenData))

      router.push("/home")
    } catch (error) {
      console.log("deu outra merda")
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src="/Imagem-home.png"
          alt="Porfessor é aluno sorrindo"
          layout="fill"
          className="object-cover"
        />
      </div>
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
        <section className="col-span-2 flex flex-col items-center gap-4">
          <h1 className="--font-roboto text-6xl font-semibold text-cyan-800">
            Sistema ADE
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuário</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu usuário" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="*****" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">
                {isLoading ? (
                  <Spinner className="animate-spin text-lg" />
                ) : (
                  "Acessar"
                )}
              </Button>
            </form>
          </Form>
        </section>
      </div>
    </div>
  )
}

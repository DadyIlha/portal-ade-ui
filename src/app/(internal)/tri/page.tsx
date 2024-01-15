"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { range } from "lodash"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const applicationOptions = ["SAEB Aplicação", "Primeira Aplicação"]
const schoolYearOptions = ["5º ano regular", "9º ano regular"]

// const optionMap = {
//   2023: {
//     applicationOptions,
//     yearOptions
//   },
//   2022: {
//     applicationOptions: []
//     yearOptions: []
//   },
//   ...
// }

const formSchema = z.object({
  applicationYear: z.string(),
  application: z.string(),
  schoolYear: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export default function TriPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const applicationYear = form.watch("applicationYear")
  const application = form.watch("application")
  const schoolYear = form.watch("schoolYear")

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data })
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-cyan-700">
        Teoria de resposta ao item
      </h1>

      <Separator />

      <p className="text-slate-600">
        Selecione o ano da aplicação para obter o relatório
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="applicationYear"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o ano de aplicação" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {range(5).map((i) => {
                      const year = new Date().getFullYear() - i

                      return (
                        <SelectItem key={i} value={year.toString()}>
                          {year}
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {!!applicationYear && (
            <FormField
              control={form.control}
              name="application"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a aplicação" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {applicationOptions.map((option) => {
                        return (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {!!applicationYear && !!application && (
            <FormField
              control={form.control}
              name="schoolYear"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o ano escolar" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {schoolYearOptions.map((option) => {
                        return (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {!!applicationYear && !!application && !!schoolYear && (
            <Button variant="outline" type="submit">
              Salvar
            </Button>
          )}
        </form>
      </Form>
    </div>
  )
}

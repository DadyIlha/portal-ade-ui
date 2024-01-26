"use client"

import { PropsWithChildren } from "react"
import { Provider } from "react-redux"

import { store } from "@/redux/store/index"

export const ReduxProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
)

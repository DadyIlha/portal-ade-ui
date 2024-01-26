"use server"

import axios, { InternalAxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { permanentRedirect, redirect } from "next/navigation"

import { TokenData } from "@/app/interfaces/TokenData"

export async function GetLogs(
  pageNumber: number,
  pageSize: number
): Promise<Relatorios> {
  const results = (
    await axios.get(`/api/userApi/getLogs`, {
      timeout: 120000,
      params: {
        pageNumber,
        pageSize,
      },
    })
  ).data
  return results
}

interface HandleLoginParams {
  username: string
  password: string
}

export async function handleLogin({ username, password }: HandleLoginParams) {
  const cookieStore = cookies()

  if (!username || !password) return null

  try {
    const { data: tokenData } = await axios.post<TokenData>(
      `${process.env.API_BASE_URL}/seducpa/users/login`,
      {
        clientId: process.env.CLIENT_ID,
        apiKey: process.env.API_KEY,
      }
    )

    const userNameBase64 = Buffer.from(username.toString()).toString("base64")
    const passwordBase64 = Buffer.from(password.toString()).toString("base64")

    const { data: userData } = await axios.post<User>(
      `${process.env.API_BASE_URL}/seducpa/users/userLogin`,
      {
        userName: userNameBase64,
        password: passwordBase64,
      },
      {
        headers: {
          Authorization: `Bearer ${tokenData.token}`,
        },
      }
    )

    if (!!userData) cookieStore.set("token", tokenData.token)

    return {
      tokenData,
      userData,
    }
  } catch (e) {
    return null
  }
}

export async function handleLogout() {
  const cookieStore = cookies()
  cookieStore.delete("token")
}

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const cookieStore = cookies()
  const token = cookieStore.get("token")

  return {
    ...config,
    headers: {
      Authorization: config.headers.Authorization || `Bearer ${token}`,
    },
  } as InternalAxiosRequestConfig
})

export { api }

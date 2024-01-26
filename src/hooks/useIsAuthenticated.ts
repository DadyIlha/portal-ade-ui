import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { useAppSelector } from "@/redux/store"

export const useIsAuthenticated = () => {
  const router = useRouter()
  const token = useAppSelector((state) => state.auth.tokenData?.token)

  useEffect(() => {
    if (!token) {
      router.push("/")
    }
  }, [router, token])
}

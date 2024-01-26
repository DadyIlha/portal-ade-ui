import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const protectedRoutes = ["/home", "/relatorios", "/tri"]

const authRoutes = ["/"]

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    request.cookies.delete("token")
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.delete("token")

    return response
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/home", request.url))
  }
}

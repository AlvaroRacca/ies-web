"use server"

import { cookies } from "next/headers"

// Simulación de autenticación - En producción usar Supabase Auth
const ADMIN_USER = {
  email: "admin@iessantafe.edu",
  password: "admin123",
  name: "Administrador",
  role: "admin",
}

export async function login(email: string, password: string) {
  // Simulación de validación
  if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
    const cookieStore = await cookies()
    // Guardar sesión simulada
    cookieStore.set("auth-token", "simulated-token-" + Date.now(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    })

    return { success: true, user: { email: ADMIN_USER.email, name: ADMIN_USER.name, role: ADMIN_USER.role } }
  }

  return { success: false, error: "Credenciales inválidas" }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")

  if (token) {
    return {
      user: {
        email: ADMIN_USER.email,
        name: ADMIN_USER.name,
        role: ADMIN_USER.role,
      },
    }
  }

  return null
}

import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { LoginForm } from "@/components/admin/login-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function LoginPage() {
  const session = await getSession()

  if (session) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Panel de Administración</CardTitle>
          <p className="text-muted-foreground">Ingresa tus credenciales para continuar</p>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Credenciales de prueba:</p>
            <p className="text-sm text-muted-foreground">Email: admin@Instituto-educativo.edu.ar</p>
            <p className="text-sm text-muted-foreground">Contraseña: admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

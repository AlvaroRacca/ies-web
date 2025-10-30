import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function NosotrosLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-12 w-72 mb-6" />
            <Skeleton className="h-6 w-full max-w-xl" />
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[...Array(2)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-64" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-40" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

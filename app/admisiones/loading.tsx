import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function AdmisionesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-12 w-80 mb-6" />
            <Skeleton className="h-6 w-full max-w-xl" />
          </div>
        </div>
      </section>

      {/* Pasos / Requisitos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-72 mx-auto mb-6" />
          <div className="flex justify-center gap-3">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-48" />
          </div>
        </div>
      </section>
    </div>
  )
}

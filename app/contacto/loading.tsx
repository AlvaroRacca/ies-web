import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactoLoading() {
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

      {/* Sedes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-56" />
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-44" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Mapa */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-56" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-12 w-full" />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-12 w-12 rounded-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

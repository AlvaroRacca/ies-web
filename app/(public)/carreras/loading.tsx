import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function CarreraDetalleLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton (gradiente y centrado como page.tsx) */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <Skeleton className="h-10 w-64 mx-auto mb-4 opacity-70" />
          <Skeleton className="h-5 w-full max-w-3xl mx-auto opacity-60" />
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Skeleton className="h-9 w-44" />
            <Skeleton className="h-9 w-48" />
          </div>
        </div>
      </section>

      {/* Info Cards Skeleton (centrado y max-w-5xl) */}
      <section className="container text-center max-w-5xl mx-auto py-8 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Skeleton className="h-8 w-8 mb-2" />
                  <Skeleton className="h-4 w-16 mb-1" />
                  <Skeleton className="h-5 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton (container max-w-6xl) */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-8 w-64 mb-4" />
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[...Array(2)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
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

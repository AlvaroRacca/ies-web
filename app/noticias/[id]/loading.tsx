import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function NoticiaDetalleLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton (gradiente unificado) */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Skeleton className="h-6 w-28 mx-auto mb-3 opacity-80" />
          <Skeleton className="h-10 w-3/4 mx-auto mb-2 opacity-80" />
          <div className="mt-2 flex items-center justify-center gap-3 text-white/85 text-sm">
            <Skeleton className="h-4 w-28" />
            <span className="hidden md:inline opacity-60">•</span>
            <Skeleton className="hidden md:block h-4 w-24" />
          </div>
        </div>
      </section>

      {/* Contenido Skeleton */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 px-4">
          {/* Artículo */}
          <article className="lg:col-span-2">
            <div className="mb-8 overflow-hidden rounded-lg shadow-sm bg-muted/30">
              <div className="aspect-video">
                <Skeleton className="h-full w-full" />
              </div>
            </div>

            <Skeleton className="h-5 w-2/3 mb-6" />

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <Skeleton className="h-14 w-20 rounded-md" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Relacionadas Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <Skeleton className="h-7 w-64 mb-6" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-14" />
                  </div>
                  <Skeleton className="h-5 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

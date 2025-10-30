import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Skeleton className="h-10 w-80 mx-auto mb-4 opacity-80" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto opacity-70" />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-40 hidden md:block" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

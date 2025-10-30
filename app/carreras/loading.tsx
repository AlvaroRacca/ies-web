import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Skeleton className="h-12 w-80 mb-6 opacity-80" />
            <Skeleton className="h-6 w-full max-w-xl opacity-70" />
          </div>
        </div>
      </section>

      {/* Search and Filter Skeleton */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Skeleton className="h-10 w-full md:w-96" />
            <div className="flex gap-2 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-9 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                  <Skeleton className="h-9 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

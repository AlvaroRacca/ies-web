import type React from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Share2 } from "lucide-react";
import { getNoticiaById, getNoticias } from "@/lib/data/noticias";

export default async function NoticiaDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const noticia = await getNoticiaById(Number.parseInt(id));
  const recientes = (await getNoticias())
    .filter((n) => n.id !== Number.parseInt(id))
    .slice(0, 3);

  if (!noticia) return notFound();

  return (
    <div className="min-h-screen cursor-none">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="secondary" className="w-fit mx-auto mb-3 bg-red-50 text-[#D20537] border border-red-100">
            {noticia.categoria}
          </Badge>
          <h1 className="font-sans text-3xl md:text-6xl font-black text-white mb-2 text-balance">
            {noticia.titulo}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-3 text-white/85 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <span className="hidden md:inline opacity-60">•</span>
            <div className="hidden md:flex items-center gap-2 opacity-90">
              <Share2 className="h-4 w-4" /> Compartir
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 px-4">
          {/* Artículo */}
          <article className="lg:col-span-2">
            {/* Imagen destacada del artículo */}
            <div className="mb-8 overflow-hidden rounded-lg shadow-sm bg-muted/30">
              <div className="aspect-video">
                <img
                  src={noticia.imagen || "/placeholder.svg"}
                  alt={noticia.titulo}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Copete / lead */}
            {noticia.resumen && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {noticia.resumen}
              </p>
            )}

            {/* Cuerpo */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="leading-8 tracking-tight">{noticia.contenido}</p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">Información</h3>
                <Separator className="my-4" />
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <span className="w-24 text-foreground/80">Categoría:</span>{" "}
                    {noticia.categoria}
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-foreground/80">Fecha:</span>{" "}
                    {new Date(noticia.fecha).toLocaleDateString("es-ES")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">Noticias recientes</h3>
                <Separator className="my-4" />
                <div className="space-y-3">
                  {recientes.map((n) => (
                    <a
                      key={n.id}
                      href={`/noticias/${n.id}`}
                      className="group flex gap-3"
                    >
                      <div className="h-14 w-20 rounded-md overflow-hidden bg-muted">
                        <img
                          src={n.imagen || "/placeholder.svg"}
                          alt=""
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {n.titulo}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(n.fecha).toLocaleDateString("es-ES", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Relacionadas */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Noticias relacionadas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recientes
              .filter((n) => n.categoria === noticia.categoria)
              .slice(0, 6)
              .map((n) => (
                <a
                  key={n.id}
                  href={`/noticias/${n.id}`}
                  className="group block overflow-hidden rounded-lg border bg-background hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={n.imagen || "/placeholder.svg"}
                      alt={n.titulo}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-medium text-accent">
                        {n.categoria}
                      </span>
                      <span>
                        {new Date(n.fecha).toLocaleDateString("es-ES", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <h3 className="font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {n.titulo}
                    </h3>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

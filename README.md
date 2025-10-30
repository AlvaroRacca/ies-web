# IES Santa Fe — Sitio Web (Next.js)

Sitio institucional del IES Santa Fe construido con Next.js (App Router), TailwindCSS y componentes shadcn/ui. Incluye secciones públicas (Inicio, Carreras, Noticias, Admisiones, Contacto, Portal de Estudiantes) y vistas de detalle para carreras y noticias.

## Tech stack
- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui (componentes)
- pnpm

## Requerimientos
- Node 18+
- pnpm 8+ (o superior)

## Instalación y ejecución local
```bash
pnpm install
pnpm dev
```

Aplicación: http://localhost:3000

Build de producción:
```bash
pnpm build
pnpm start
```

## Scripts comunes
- `pnpm dev`: modo desarrollo
- `pnpm build`: build de producción
- `pnpm start`: sirve el build

## Estructura principal
```
app/
  (public)/            # páginas públicas
    page.tsx           # Home
    carreras/          # listado y detalle de carreras
      page.tsx
      [id]/page.tsx
    noticias/          # listado y detalle de noticias
      page.tsx
      [id]/page.tsx
    admisiones/page.tsx
    contacto/page.tsx
    nosotros/page.tsx
    portal-estudiantes/page.tsx
  admin/               # secciones de administración (mock UI)
components/            # UI y secciones (header, footer, etc.)
lib/data/              # "base de datos" local (mock)
  carreras.ts          # carreras reales integradas (con URLs oficiales y PDFs)
  noticias.ts          # noticias mock
  institucional.ts     # sedes y redes oficiales
public/                # assets e imágenes
```

## Datos
Los datos se cargan desde módulos TypeScript en `lib/data/` a modo de base local hasta conectar una base de datos real.
- `lib/data/carreras.ts`: incluye campos como `fuente_url`, `pdf_url`, `caracteristicas`, `materias_*`, `perfil_profesional`, etc.
- `lib/data/noticias.ts`: listado de noticias con `titulo`, `resumen`, `contenido`, `categoria`, `fecha`, `imagen`.
- `lib/data/institucional.ts`: sedes oficiales (direcciones, teléfonos, emails) y redes.

## Rutas clave
- `/` Inicio
- `/carreras` y `/carreras/[id]`
- `/noticias` y `/noticias/[id]`
- `/admisiones`
- `/contacto`
- `/portal-estudiantes` (Aula Virtual, Sistema de Gestión IES — enlaces placeholders)

## Estilos y layout
- Header y Footer globales para rutas públicas (controlados por `components/layout-shell.tsx`).
- Héroes unificados con gradiente y contenido centrado (consistentes con Portal de Estudiantes).
- Imágenes ubicadas en `/public` para evitar 404.

## Deploy
### Opción A: Vercel (recomendada para Next.js)
1. Instalar CLI (opcional): `npm i -g vercel`
2. Iniciar sesión: `vercel login`
3. Deploy: `vercel --prod`

### Opción B: Netlify (build en la nube)
1. Conectar el repositorio GitHub en Netlify (recomendado: deploy desde CI en Linux).
2. Build command: `pnpm install --frozen-lockfile=false && pnpm build`
3. Publish directory: `.next`
4. Plugin: `@netlify/plugin-nextjs` (definido en `netlify.toml`).

Nota: Evitar ejecutarlo con `netlify deploy --prod` desde Windows local, ya que Next genera symlinks para el modo standalone que pueden fallar con EPERM; el build del CI de Netlify (Linux) no tiene este problema.

## Variables de entorno
Actualmente no se requieren variables de entorno para correr localmente. Si más adelante se integra un CMS o API, documentar aquí.

## Personalización rápida
- Cambiar identidad visual (nombre/logo) en `components/header.tsx`.
- Actualizar imágenes de portada en `/public`.
- Editar contenido institucional en `lib/data/institucional.ts`.
- Completar planes/materias/perfiles en `lib/data/carreras.ts`.

## Contribuir
1. Crea una rama desde `main`.
2. Haz cambios y escribe commits claros.
3. Abre un PR describiendo alcance y capturas si corresponde.

## Licencia
Proyecto académico interno del IES Santa Fe. Uso interno/demostración.

import { InteractiveHero } from "@/components/interactive-hero"
import { InteractivePrograms } from "@/components/interactive-programs"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { LatestNews } from "@/components/latest-news"
import { FloatingCTA } from "@/components/floating-cta"
import { getCarreras } from "@/lib/data/carreras"

export default async function Home() {
  const carreras = await getCarreras()
  
  return (
    <main>
      <InteractiveHero />
      <InteractivePrograms carreras={carreras} />
      <WhyChooseUs />
      <Testimonials />
      <LatestNews />
      <FloatingCTA />
    </main>
  )
}

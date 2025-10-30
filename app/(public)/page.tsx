import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { FeaturedPrograms } from "@/components/featured-programs"
import { LatestNews } from "@/components/latest-news"
import { CampusLife } from "@/components/campus-life"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedPrograms />
      <LatestNews />
      <CampusLife />
      <Testimonials />
      <CTA />
    </main>
  )
}

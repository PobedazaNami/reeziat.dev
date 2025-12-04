import { PromoBanner } from "@/components/promo-banner"
import { HeroSection } from "@/components/hero-section"
import { ImageSlider } from "@/components/image-slider"
import { VideoSection } from "@/components/video-section"
import { PricingBlocks } from "@/components/pricing-blocks"
import { ContactForm } from "@/components/contact-form"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { Snowfall } from "@/components/snowfall"
import { ChristmasLights } from "@/components/christmas-decorations"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Snowfall />
      <ChristmasLights />

      <PromoBanner />
      <HeroSection />
      <ImageSlider />
      <VideoSection />
      <PricingBlocks />
      <ContactForm />
      <MapSection />
      <Footer />
    </main>
  )
}

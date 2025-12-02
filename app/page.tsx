import Header from "@/components/header"
import SearchSection from "@/components/search-section"
import HeroSection from "@/components/hero-section"
import LearnSection from "@/components/learn-section"
import TrackSection from "@/components/track-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SearchSection />
      <HeroSection />
      <div className="flex flex-col lg:flex-row gap-8 px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <LearnSection />
        <TrackSection />
      </div>
    </main>
  )
}

import HeroSection from '../components/landing/HeroSection'
import HowItWorks from '../components/landing/HowItWorks'
import FamilyVoices from '../components/landing/FamilyVoices'
import StoryWorlds from '../components/landing/StoryWorlds'
import FAQ from '../components/landing/FAQ'
import Research from '../components/landing/Research'
import Testimonials from '../components/landing/Testimonials'
import Pricing from '../components/landing/Pricing'
import CTA from '../components/landing/CTA'
import StarrySky from '../components/landing/StarrySky'

export default function LandingPage() {
  return (
    <div className="relative isolate bg-linear-to-br from-navy-950/90 via-navy-700/80 to-navy-900/90">
      <StarrySky />
      <HeroSection />
      <HowItWorks />
      <FamilyVoices />
      <StoryWorlds />
      <Research />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}

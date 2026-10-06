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
import { useEffect } from 'react'
import { QUESTIONS } from '../components/landing/faqQuestions'
import { SITE_JSON_LD, faqJsonLd, setSeo } from '../seo'

export default function LandingPage() {
  useEffect(() => {
    setSeo({
      title: 'Wonder Tales Hub — Personalized AI Bedtime Stories',
      description:
        'Create personalized bedtime stories where your child is the hero, written for their age and narrated by a storyteller or in your own voice. Ten languages. One free story.',
      path: '/',
      jsonLd: [...SITE_JSON_LD, faqJsonLd(QUESTIONS)],
    })
  }, [])
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

import Contact from '@/sections/Dashboard/Contact'
import ExploreTarkeys from '@/sections/Dashboard/Explore'
import FAQ from '@/sections/Dashboard/Faq'
import HeroSection from '@/sections/Dashboard/HeroSection'
import OurServices from '@/sections/Dashboard/OurServices'
import Reviews from '@/sections/Dashboard/Reviews'
import WhyTarkeys from '@/sections/Dashboard/WhyChooseUs'
import { Box } from '@mui/material'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function DashboardPage() {
  const { hash } = useLocation()

  useLayoutEffect(() => {
    const sectionId = hash.slice(1)
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        const topPos = el.getBoundingClientRect().top + window.pageYOffset - 56
        window.scrollTo({ top: topPos, behavior: 'auto' })
      }
    }
  }, [hash])

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <HeroSection />
      <WhyTarkeys />
      <OurServices />
      <ExploreTarkeys />
      <Reviews />
      <FAQ />
      <Contact />
    </Box>
  )
}

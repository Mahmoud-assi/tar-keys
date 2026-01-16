import Contact from '@/sections/Dashboard/Contact'
import Courses from '@/sections/Dashboard/Course'
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
    // Only scroll to hash if hash exists
    if (!hash) return
    const sectionId = hash.slice(1)
    if (sectionId) {
      // Use a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          const topPos = el.getBoundingClientRect().top + window.pageYOffset - 56
          window.scrollTo({ top: topPos, behavior: 'auto' })
        }
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <Box position="relative">
      <Box id="home">
        <HeroSection />
      </Box>
      <Box id="why-tarkeys">
        <WhyTarkeys />
      </Box>
      <Box id="our-services">
        <OurServices />
      </Box>
      <Box id="courses">
        <Courses />
      </Box>
      <Box id="explore-tarkeys">
        <ExploreTarkeys />
      </Box>
      <Box id="reviews">
        <Reviews />
      </Box>
      <Box id="faq">
        <FAQ />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  )
}

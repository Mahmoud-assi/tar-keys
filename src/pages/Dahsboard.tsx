import ExploreTarkeys from '@/sections/Explore'
import HeroSection from '@/sections/HeroSection'
import OurServices from '@/sections/OurServices'
import WhyTarkeys from '@/sections/WhyChooseUs'
import { Stack } from '@mui/material'

export default function DashboardPage() {
  return (
    <Stack>
      <HeroSection />
      <WhyTarkeys />
      <OurServices />
      <ExploreTarkeys />
    </Stack>
  )
}

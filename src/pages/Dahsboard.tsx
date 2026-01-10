import HeroSection from '@/sections/HeroSection'
import WhyTarkeys from '@/sections/WhyChooseUs'
import { Stack } from '@mui/material'

export default function DashboardPage() {
  return (
    <Stack>
      <HeroSection />
      <WhyTarkeys />
    </Stack>
  )
}

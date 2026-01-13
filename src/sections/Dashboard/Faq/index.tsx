import PageSection from '@/components/PageSection'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import { getFAQByLocale } from './_mock'
import type { LocaleType } from '@/types/custom'
import FAQItem from './FAQItem'
import { useState } from 'react'

const MotionTypography = motion.create(Typography)
const MotionImg = motion.create('img')

export default function FAQ() {
  const { formatMessage: f, locale } = useIntl()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const faqs = getFAQByLocale(locale as LocaleType)
  const firstHalf = faqs.slice(0, 5)
  const secondHalf = faqs.slice(5, 10)

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index))
  }

  return (
    <PageSection
      id="faq"
      bgImage="/images/faq/bg.png"
      bgRotation="rotate(-90deg)"
      bgSize="35% auto"
      fades={[
        {
          color: 'rgba(220, 36, 60, 0.15)',
          position: { left: 0, top: 0, transform: 'translate(-40%, 25%)' },
        },
        {
          color: 'rgba(27, 196, 113, 0.15)',
          position: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
        },
      ]}
    >
      <Stack spacing={2} alignItems="center">
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          sx={{
            filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {f({ id: 'faqTitle' })}
        </MotionTypography>
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 14, md: 20 }}
          textAlign="center"
          sx={{ maxWidth: theme => ({ xs: '100%', md: theme.breakpoints.values.sm }) }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {f({ id: 'faqDescription' })}
        </MotionTypography>
      </Stack>

      <Box width="100%">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid size={{ xs: 12, lg: 4 }} order={{ xs: 0, lg: 2 }}>
            <Stack spacing={{ xs: 2, md: 3 }} alignItems="center">
              <MotionImg
                src="/images/faq/group.png"
                alt="FAQ Illustration"
                style={{ width: '100%', maxWidth: 300 }}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 120,
                  damping: 10,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }} order={{ xs: 1, lg: 1 }}>
            <Stack spacing={{ xs: 2, md: 3 }}>
              {firstHalf.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  {...faq}
                  index={idx}
                  expandedIndex={expandedIndex}
                  handleToggle={handleToggle}
                />
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }} order={{ xs: 2, lg: 3 }}>
            <Stack spacing={{ xs: 2, md: 3 }}>
              {secondHalf.map((faq, idx) => (
                <FAQItem
                  key={idx + 5}
                  {...faq}
                  index={idx + 5}
                  expandedIndex={expandedIndex}
                  handleToggle={handleToggle}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </PageSection>
  )
}

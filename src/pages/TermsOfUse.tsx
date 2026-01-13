import { Box, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'
import PageSection, { type FadeConfig } from '@/components/PageSection'

const MotionTypography = motion.create(Typography)

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function TermsOfUse() {
  const { formatMessage: f } = useIntl()

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <PageSection
        bgImage="/images/hero-bg.png"
        bgRotation="rotate(180deg)"
        bgSize="75% auto"
        fades={
          [
            {
              color: 'rgba(220, 36, 60, 0.15)', // Red
              position: { left: 0, top: 0, transform: 'translate(-25%, -25%)' },
            },
            {
              color: 'rgba(27, 196, 113, 0.15)', // Green
              position: { top: 0, right: 0, transform: 'translate(25%, -25%)' },
            },
            {
              color: 'rgba(254, 206, 48, 0.15)', // Yellow
              position: {
                bottom: '-200px',
                right: { xs: 0, md: 206 },
                transform: 'translate(25%, 25%)',
              },
            },
          ] as FadeConfig[]
        }
        sx={{
          minHeight: 'calc(100dvh - 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 4, md: 6 },
        }}
      >
        <Stack 
          spacing={{ xs: 3, md: 4 }} 
          mx="auto" 
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          {/* Title */}
          <MotionTypography
            variant="h1"
            fontSize={{ xs: 28, md: 40 }}
            fontWeight={600}
            color="primary"
            sx={{
              filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
              textAlign: 'center',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            {f({ id: 'termsOfUse' })}
          </MotionTypography>

          {/* Last Updated */}
          <MotionTypography
            variant="subtitle1"
            fontSize={{ xs: 14, md: 16 }}
            color="grey.600"
            textAlign="center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {f({ id: 'termsLastUpdated' })}
          </MotionTypography>

          {/* Introduction */}
          <MotionTypography
            variant="body1"
            fontSize={{ xs: 16, md: 18 }}
            color="grey.700"
            lineHeight={1.8}
            textAlign="center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {f({ id: 'termsIntroduction' })}
          </MotionTypography>

          {/* Section 1 */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <MotionTypography
              variant="h4"
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {f({ id: 'termsSection1Title' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {f({ id: 'termsSection1Content' })}
            </MotionTypography>
          </Box>

          {/* Section 2 */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <MotionTypography
              variant="h4"
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {f({ id: 'termsSection2Title' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {f({ id: 'termsSection2Content' })}
            </MotionTypography>
          </Box>

          {/* Section 3 */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <MotionTypography
              variant="h4"
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {f({ id: 'termsSection3Title' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {f({ id: 'termsSection3Content' })}
            </MotionTypography>
          </Box>

          {/* Section 4 */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <MotionTypography
              variant="h4"
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {f({ id: 'termsSection4Title' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {f({ id: 'termsSection4Content' })}
            </MotionTypography>
          </Box>

          {/* Section 5 */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <MotionTypography
              variant="h4"
              fontSize={{ xs: 20, md: 24 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {f({ id: 'termsSection5Title' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {f({ id: 'termsSection5Content' })}
            </MotionTypography>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              mt: 4,
              p: { xs: 3, md: 4 },
              bgcolor: 'primary.light',
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <MotionTypography
              variant="h5"
              fontSize={{ xs: 18, md: 20 }}
              fontWeight={600}
              color="primary"
              mb={2}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              {f({ id: 'termsContactTitle' })}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              fontSize={{ xs: 16, md: 18 }}
              color="grey.700"
              lineHeight={1.8}
              textAlign="center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {f({ id: 'termsContactContent' })}
            </MotionTypography>
          </Box>
        </Stack>
      </PageSection>
    </Box>
  )
}


import AnimateButton from '@/components/AnimateButton'
import PageSection from '@/components/PageSection'
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  typographyClasses,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionGrid = motion.create(Grid)
const MotionStack = motion.create(Stack)
const MotionTypography = motion.create(Typography)
const MotionImg = motion.create('img')

export default function Contact() {
  const { formatMessage: f } = useIntl()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <PageSection bgImage="/images/last/bg.png" bgRotation="rotate(-90deg)" bgSize="35% auto">
      <MotionBox width="100%">
        {isMobile ? (
          <MotionStack spacing={3} sx={{ alignItems: 'center' }} variants={containerVariants}>
            <MotionTypography
              variant="subtitle1"
              fontSize={{ xs: 28, md: 32 }}
              color="primary"
              sx={{
                filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
                textAlign: 'center',
              }}
              variants={itemVariants}
            >
              {f({ id: 'startLearningToday' })}
            </MotionTypography>
            <MotionGrid container spacing={2} justifyContent="center" variants={containerVariants}>
              <MotionGrid
                size={{ xs: 6 }}
                variants={imageVariants}
                whileHover="hover"
                animate={{ ...floatingAnimation, y: [0, -8, 0] }}
              >
                <Box
                  component="img"
                  src="/images/last/1.png"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 200,
                    mx: 'auto',
                    display: 'block',
                  }}
                />
              </MotionGrid>
              <MotionGrid
                size={{ xs: 6 }}
                variants={imageVariants}
                whileHover="hover"
                animate={{ ...floatingAnimation, y: [0, -8, 0], transition: { delay: 0.5 } }}
              >
                <Box
                  component="img"
                  src="/images/last/2.png"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 200,
                    mx: 'auto',
                    display: 'block',
                  }}
                />
              </MotionGrid>
            </MotionGrid>
            <MotionStack
              spacing={2}
              sx={{
                alignItems: 'center',
                [`.${typographyClasses.root}`]: { textAlign: 'center' },
              }}
              variants={containerVariants}
            >
              <MotionTypography
                variant="body1"
                fontSize={{ xs: 14, md: 18 }}
                variants={itemVariants}
              >
                {f({ id: 'baccalaureateMessage' })}
              </MotionTypography>
              <MotionTypography variant="caption" fontSize={14} variants={itemVariants}>
                <Typography
                  component={Link}
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {f({ id: 'subscribeCTA' })}
                </Typography>{' '}
                {f({ id: 'subscriptionInfo' })}
              </MotionTypography>
              <MotionTypography
                fontSize={{ xs: 12, md: 14 }}
                fontWeight={300}
                color="textSecondary"
                variants={itemVariants}
              >
                {f({ id: 'supportTeamReady' })}
              </MotionTypography>
            </MotionStack>
            <AnimateButton sx={{ width: '100%' }}>
              <Button
                size="medium"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 3,
                  color: 'secondary.main',
                }}
                endIcon={
                  <MotionImg
                    src="/icons/common/whatsapp.svg"
                    style={{ height: 35, marginBottom: -0.5 }}
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      },
                    }}
                  />
                }
              >
                {f({ id: 'contactAndStart' })}
              </Button>
            </AnimateButton>
          </MotionStack>
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
            <MotionGrid size={{ xs: 6, lg: 4 }} variants={imageVariants} whileHover="hover">
              <Box
                component="img"
                src="/images/last/2.png"
                sx={{ width: '100%', height: 'auto' }}
              />
            </MotionGrid>
            <MotionGrid size={{ xs: 6, lg: 4 }} variants={containerVariants}>
              <MotionStack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  [`.${typographyClasses.root}`]: { textAlign: 'center' },
                }}
                variants={containerVariants}
              >
                <MotionTypography
                  variant="subtitle1"
                  fontSize={{ xs: 28, md: 32 }}
                  color="primary"
                  sx={{
                    filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
                    textAlign: 'center',
                  }}
                  variants={itemVariants}
                >
                  {f({ id: 'startLearningToday' })}
                </MotionTypography>

                <MotionTypography
                  variant="body1"
                  fontSize={{ xs: 14, md: 18 }}
                  variants={itemVariants}
                >
                  {f({ id: 'baccalaureateMessage' })}
                </MotionTypography>
                <MotionTypography variant="caption" fontSize={14} variants={itemVariants}>
                  <Typography
                    component={Link}
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {f({ id: 'subscribeCTA' })}
                  </Typography>{' '}
                  {f({ id: 'subscriptionInfo' })}
                </MotionTypography>
                <MotionTypography
                  fontSize={{ xs: 12, md: 14 }}
                  fontWeight={300}
                  color="textSecondary"
                  variants={itemVariants}
                >
                  {f({ id: 'supportTeamReady' })}
                </MotionTypography>
                <AnimateButton sx={{ width: '100%' }}>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: 3,
                      color: 'secondary.main',
                    }}
                    endIcon={
                      <MotionImg
                        src="/icons/common/whatsapp.svg"
                        style={{ height: 35, marginBottom: -0.5 }}
                        animate={{
                          rotate: [0, 10, -10, 10, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          },
                        }}
                      />
                    }
                  >
                    {f({ id: 'contactAndStart' })}
                  </Button>
                </AnimateButton>
              </MotionStack>
            </MotionGrid>
            <MotionGrid
              size={{ xs: 6, lg: 4 }}
              variants={imageVariants}
              whileHover="hover"
              animate={{ ...floatingAnimation, y: [0, -8, 0] }}
            >
              <Box
                component="img"
                src="/images/last/1.png"
                sx={{ width: '100%', height: 'auto' }}
              />
            </MotionGrid>
          </Grid>
        )}
      </MotionBox>
    </PageSection>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: 'backOut' as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
}

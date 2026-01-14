import PageSection from '@/components/PageSection'
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { mock_data } from './_mock'
import CourseCard from './CourseCard'
import { motion } from 'framer-motion'

const MotionTypography = motion.create(Typography)
const MotionStack = motion.create(Stack)
const MotionIconButton = motion.create(IconButton)

export default function Courses() {
  const { formatMessage: f } = useIntl()

  return (
    <PageSection bgImage="/images/courses/bg.png" id="courses">
      <Stack spacing={2} alignItems="center">
        <MotionTypography
          variant="subtitle1"
          fontSize={{ xs: 28, md: 32 }}
          color="primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
          }}
        >
          {f({ id: 'coursesTitle' })}
        </MotionTypography>
        <MotionTypography
          variant="body1"
          fontSize={{ xs: 16, md: 20 }}
          sx={{ textAlign: 'justify', textAlignLast: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {f({ id: 'coursesDescription' })}
        </MotionTypography>
      </Stack>
      <Container sx={{ mx: 'auto', mt: { xs: 2, md: 3 }, px: { xs: 0 } }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 6, lg: 1 }}>
            <MotionIconButton
              size="large"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              sx={{ alignSelf: 'center' }}
            >
              <Box component="img" src="/images/courses/next.png" />
            </MotionIconButton>
          </Grid>
          <Grid size={{ xs: 12, lg: 10 }}>
            <MotionStack
              direction="row"
              alignItems="center"
              spacing={2}
              overflow="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {mock_data.map(c => (
                <CourseCard
                  key={c.id}
                  img={c.cover}
                  name={c.name}
                  teacher={{
                    name: c.teacher.name,
                    img: c.teacher.image as string,
                  }}
                  price={c.original_price}
                />
              ))}
            </MotionStack>
          </Grid>
          <Grid size={{ xs: 6, lg: 1 }}>
            <MotionIconButton size="large" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Box component="img" src="/images/courses/prev.png" />
            </MotionIconButton>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

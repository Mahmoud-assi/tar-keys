import { Box, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { motion } from 'framer-motion'

export default function SectionHeader() {
  const { formatMessage: f } = useIntl()

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography
        component={motion.div}
        variant="subtitle1"
        fontSize={{ xs: 28, md: 32 }}
        color="primary"
        sx={{ filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {f({ id: 'whyTarkez' })}
      </Typography>
      <Typography
        component={motion.p}
        fontSize={{ xs: 16, md: 20 }}
        maxWidth={{ xs: '100%', md: '85%' }}
        textAlign="justify"
        sx={{ textAlignLast: 'center' }}
        color="grey.700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        viewport={{ once: true }}
      >
        {f({ id: 'problemDescription' })}{' '}
        <Typography
          component={motion.span}
          color="primary"
          fontSize="inherit"
          sx={{
            position: 'relative',
            display: 'inline-block',
            cursor: 'pointer',
          }}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {f({ id: 'butWithTarkez' })}{' '}
          <Box
            component={motion.span}
            variants={{
              rest: {
                width: '100%',
                left: 0,
              },
              hover: {
                width: 0,
                left: '100%',
              },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            sx={{
              position: 'absolute',
              bottom: -2,
              height: 2,
              bgcolor: 'currentColor',
            }}
          />
        </Typography>{' '}
        {f({ id: 'becauseWeHave' })}
      </Typography>
    </Stack>
  )
}

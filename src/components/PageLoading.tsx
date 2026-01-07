import { alpha, LinearProgress, linearProgressClasses, Stack } from '@mui/material'
import { motion } from 'framer-motion'

export function PageLoading({ shared = false }: { shared?: boolean }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      component={motion.div}
      minHeight={shared ? '100dvh' : 'calc(100dvh - 56px)'}
      height="100%"
      width="100%"
      spacing={2}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LinearProgress
        sx={{
          width: 1,
          maxWidth: { xs: 'calc(100% - 32px)', sm: 300 },
          bgcolor: ({ palette }) => alpha(palette.text.primary, 0.16),
          [`& .${linearProgressClasses.bar}`]: { bgcolor: 'primary.dark' },
        }}
      />
    </Stack>
  )
}

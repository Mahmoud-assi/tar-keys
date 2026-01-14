import AnimateButton from '@/components/AnimateButton'
import { Box, Card, IconButton, useMediaQuery } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { motion } from 'framer-motion'

export default function VideoPlayer() {
  const xs = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box
      component={Card}
      position="relative"
      sx={{
        height: { xs: 200, sm: 275, md: 325, lg: 450 },
        borderRadius: 3,
        boxShadow: '0px 4px 16px 0px #00000014',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        component={motion.div}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        sx={{ width: '100%', height: '100%', cursor: 'pointer' }}
      >
        <Box
          component="img"
          src="/images/explore/video-bg.png"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'relative',
            zIndex: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          p: 1,
        }}
      >
        <AnimateButton scale={{ hover: 1.05, tap: 1.025 }}>
          <IconButton
            disableRipple
            size={xs ? 'medium' : 'large'}
            sx={{
              bgcolor: 'var(--palette-primary-main)',
              '&:hover': { bgcolor: 'var(--palette-primary-dark)' },
            }}
          >
            <PlayArrowIcon fontSize={xs ? 'medium' : 'large'} color="secondary" />
          </IconButton>
        </AnimateButton>
      </Box>
    </Box>
  )
}

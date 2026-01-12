import { Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function SideImages() {
  return (
    <Box width="100%" height="100%" position="relative" sx={{ pointerEvents: 'none' }}>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: 0 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          width: { xs: 168, md: 314 },
          height: '100%',
        }}
      >
        <Box
          component={motion.img}
          src="/images/our-services/image.png"
          alt="Screen 1"
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 1,
            width: { xs: 91, md: 179 },
            height: { xs: 177, md: 350 },
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <Box
          component={motion.img}
          src="/images/our-services/image2.png"
          alt="Screen 2"
          sx={{
            position: 'absolute',
            right: { xs: 81, md: 135 },
            bottom: 0,
            zIndex: 2,
            width: { xs: 77, md: 152 },
            height: { xs: 151, md: 297 },
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </Box>
    </Box>
  )
}

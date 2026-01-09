import { Box } from '@mui/material'
import { motion } from 'framer-motion'

const imgBluePhone = '/images/hero-section/image2.png'
const imgWhitePhone = '/images/hero-section/image.png'
const imgPerson = '/images/hero-section/group.png'
const imgCap = '/images/hero-section/group2.png'

export default function SecondSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // maxWidth: 520,
        // mx: 'auto',
        // aspectRatio: { xs: '281 / 260', md: '420 / 430' },
        display: 'flex',
        justifyContent: { xs: 'center', md: 'end' },
        alignItems: { xs: 'center', md: 'end' },
        // overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { xs: 281, md: 420 },
          height: { xs: 260, md: 430 },
        }}
      >
        {/* White Phone */}
        <Box
          component={motion.img}
          src={imgWhitePhone}
          initial={{ x: 80, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: { xs: 122, md: 210 },
            zIndex: 1,
          }}
        />

        {/* Blue Phone */}
        <Box
          component={motion.img}
          src={imgBluePhone}
          initial={{ x: 140, opacity: 0, scale: 0.85 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          sx={{
            position: 'absolute',
            right: { xs: 87, md: 140 },
            bottom: 0,
            width: { xs: 134, md: 230 },
            zIndex: 2,
          }}
        />

        {/* Character */}
        <Box
          component={motion.img}
          src={imgPerson}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            delay: 0.4,
          }}
          sx={{
            position: 'absolute',
            left: { xs: 10, md: -40 },
            bottom: { xs: 10, md: 30 },
            width: { xs: 84, md: 140 },
            zIndex: 3,
          }}
        />
        {/* Graduation Cap */}
        <Box
          component={motion.img}
          src={imgCap}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -10, 0],
            rotate: [10, 14, 10],
            opacity: 1,
          }}
          transition={{
            y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6, delay: 0.7 },
          }}
          sx={{
            position: 'absolute',
            left: { xs: 10, md: -40 },
            top: 0,
            width: { xs: 109, md: 180 },
            zIndex: 4,
          }}
        />
      </Box>
    </Box>
  )
}

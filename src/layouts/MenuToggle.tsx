import { Box, IconButton } from '@mui/material'
import { motion } from 'framer-motion'

export default function MenuToggle({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  return (
    <IconButton
      onClick={toggle}
      sx={{
        width: 40,
        height: 40,
        '@media (min-width: 992px)': {
          display: 'none',
        },
      }}
    >
      <Box
        component={motion.svg}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          path: {
            stroke: 'var(--palette-common-black)',
          },
        }}
      >
        <Box
          component={motion.path}
          strokeWidth="2.5"
          strokeLinecap="round"
          d="M4 6 L20 6"
          variants={{
            closed: { d: 'M4 6 L20 6', rotate: 0 },
            open: { d: 'M5 5 L19 19', rotate: 0 },
          }}
        />
        <Box
          component={motion.path}
          strokeWidth="2.5"
          strokeLinecap="round"
          d="M4 12 L20 12"
          variants={{
            closed: { opacity: 1, rotate: 0 },
            open: { opacity: 0, rotate: 0 },
          }}
        />
        <Box
          component={motion.path}
          strokeWidth="2.5"
          strokeLinecap="round"
          d="M4 18 L20 18"
          variants={{
            closed: { d: 'M4 18 L20 18', rotate: 0 },
            open: { d: 'M5 19 L19 5', rotate: 0 },
          }}
        />
      </Box>
    </IconButton>
  )
}

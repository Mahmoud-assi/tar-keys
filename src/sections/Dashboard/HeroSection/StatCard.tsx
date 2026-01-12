import { Card, Typography, type SxProps, type Theme } from '@mui/material'
import { animate, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
const MotionCard = motion.create(Card)

export default function StatCard({
  value,
  label,
  sx,
}: {
  value: number
  label: string
  sx?: SxProps<Theme>
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
      onUpdate: v => setDisplayValue(Math.round(v)),
    })
    return controls.stop
  }, [value])

  return (
    <MotionCard
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      variant="outlined"
      sx={{
        width: '100%',
        borderRadius: 3,
        textAlign: 'center',
        py: 2,
        px: 3,
        ...sx,
      }}
    >
      <Typography variant="subtitle1" fontSize={32}>
        {displayValue}+
      </Typography>
      <Typography variant="subtitle1" color="textPrimary">
        {label}
      </Typography>
    </MotionCard>
  )
}

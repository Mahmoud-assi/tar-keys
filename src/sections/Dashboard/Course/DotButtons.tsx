import { Box, IconButton, Stack } from '@mui/material'

interface DotButtonsProps {
  scrollSnaps: number[]
  selectedIndex: number
  onDotButtonClick: (index: number) => void
  mobile?: boolean
}

export default function DotButtons({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
  mobile = false,
}: DotButtonsProps) {
  return (
    <Stack
      direction="row"
      spacing={mobile ? 0.5 : 1}
      justifyContent="center"
      alignItems="center"
      sx={mobile ? {} : { mt: 2 }}
    >
      {scrollSnaps.map((_, index) => (
        <IconButton
          key={index}
          onClick={() => onDotButtonClick(index)}
          sx={{
            p: 0.5,
            '&:hover': {
              transform: mobile ? 'none' : 'scale(1.1)',
              '& .dot': {
                bgcolor: 'primary.light',
              },
            },
            transition: 'transform 0.2s ease',
          }}
        >
          <Box
            className="dot"
            sx={{
              width: selectedIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              height: selectedIndex === index ? (mobile ? 10 : 12) : mobile ? 6 : 8,
              borderRadius: '50%',
              bgcolor: selectedIndex === index ? 'primary.main' : 'grey.300',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              filter:
                selectedIndex === index
                  ? 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))'
                  : '',
            }}
          />
        </IconButton>
      ))}
    </Stack>
  )
}

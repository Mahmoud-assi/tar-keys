import { SvgColor } from '@/components/SvgColor'
import {
  Avatar,
  Box,
  Card,
  Rating,
  Stack,
  SvgIcon,
  Typography,
  typographyClasses,
  type SxProps,
  type Theme,
} from '@mui/material'

interface ReviewCardProps {
  idx: number
  name: string
  comment: string
  role: string
  sx?: SxProps<Theme>
}

export default function ReviewCard({ idx, name, comment, role, sx }: ReviewCardProps) {
  return (
    <Stack
      component={Card}
      sx={{
        height: 322,
        width: 250,
        borderRadius: 3,
        p: 0,
        boxShadow: '0px 4px 16px 0px #00000014',
        gap: 0,
        userSelect: 'none',
        position: 'relative',
        overflow: 'visible',
      }}
      dir="rtl"
    >
      <Box sx={{ ...sx, height: 155, position: 'relative' }}>
        <SvgIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 251 155"
          sx={{
            width: '100%',
            height: '100%',
            fill: 'none',
          }}
        >
          <Box
            component="path"
            d="M0 24C0 10.7452 10.7452 0 24 0H226.45C239.528 0 250.198 10.4705 250.445 23.5461L250.553 29.2261C250.709 37.4856 246.626 45.2323 239.705 49.7433C208.969 69.7775 122.975 125.659 92 144C66.5 159.099 41.5946 156.793 21.5 140.5C3 125.5 0 101.882 0 101.882V24Z"
            sx={{ ...sx, zIndex: 0 }}
          />
        </SvgIcon>
        <Stack
          position="absolute"
          spacing={1}
          direction="row"
          alignItems="start"
          top={16}
          left={16}
          sx={{
            [`.${typographyClasses.root}`]: { color: 'common.white', zIndex: 2 },
          }}
        >
          <SvgColor
            src="/icons/sections/reviews/quote.svg"
            sx={{ color: 'common.white', transform: 'rotate(180deg)' }}
          />
          <Stack>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="caption" fontWeight={300}>
              {role}
            </Typography>
          </Stack>
        </Stack>
        <Box position="absolute" bottom={16} right={16} alignItems="end">
          <Avatar src={`/images/reviews/logo-card/${idx}.png`} sx={{ width: 90, height: 90 }} />
        </Box>
      </Box>

      <Stack height="100%" spacing={1} justifyContent="space-between" p={2}>
        <Box />
        <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 300 }}>
          {comment}
        </Typography>
        <SvgColor
          src="/icons/sections/reviews/quote.svg"
          sx={{ color: 'primary.main', alignSelf: 'end' }}
        />
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          bottom: -12,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'common.white',
          borderRadius: 3,
          px: 2.5,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.08)',
          borderTop: '4px solid',
          borderInline: '4px solid',
          borderColor: '#E0E0E0',
          zIndex: 20,
          width: 'fit-content',
        }}
      >
        <Rating
          value={5}
          readOnly
          sx={{
            fontSize: 18,
          }}
        />
      </Box>
    </Stack>
  )
}

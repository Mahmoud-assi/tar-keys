import { Avatar, avatarClasses, Box, Card, Stack, Typography } from '@mui/material'
import { useIntl } from 'react-intl'

export default function CourseCard({
  img,
  name,
  teacher,
  price,
}: {
  img: string
  name: string
  teacher: { name: string; img: string }
  price: number
}) {
  const { formatMessage: f } = useIntl()

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 250,
        maxWidth: 250,
        height: 250,
        borderRadius: 3,
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        px: 1.5,
        pt: 1.5,
        pb: 1,
      }}
    >
      <Stack spacing={2} justifyContent="space-between" height="100%">
        <Typography
          variant="subtitle1"
          fontSize={24}
          color="common.white"
          sx={{
            filter: 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))',
            maxWidth: 150,
          }}
        >
          {name}
        </Typography>
        <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              src={teacher.img}
              alt={teacher.name}
              sx={{
                width: 24,
                height: 24,
                bgcolor: 'secondary.main',
                [`.${avatarClasses.img}`]: { objectFit: 'contain' },
              }}
            />
            <Typography variant="body2" color="common.white" noWrap>
              {teacher.name}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="start" spacing={0.5}>
            <Box
              component="img"
              src="/icons/sections/courses/price.svg"
              sx={{ width: 26, height: 26 }}
            />
            <Typography variant="caption" color="secondary.main" gutterBottom>
              {f({ id: 'currency' }, { price })}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

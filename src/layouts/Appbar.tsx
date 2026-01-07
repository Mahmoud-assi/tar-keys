import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'
import { AppBar, Container, styled, alpha, type AppBarProps } from '@mui/material'

export default function Appbar() {
  const { offsetTop: isOffset } = useScrollOffsetTop()

  return (
    <AppbarRoot position="sticky" component="header" isOffset={isOffset}>
      <Container maxWidth="xl">Fuck</Container>
    </AppbarRoot>
  )
}

const AppbarRoot = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'isOffset',
})<AppBarProps & { isOffset: boolean }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  top: 0,
  backgroundImage: 'none',
  height: 56,
  width: '100%',
  color: 'inherit',
  transition: theme.transitions.create(['box-shadow', 'background-color', 'backdrop-filter'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  variants: [
    {
      props: ({ isOffset }) => !isOffset,
      style: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        backdropFilter: 'none',
      },
    },
    {
      props: ({ isOffset }) => isOffset,
      style: {
        boxShadow: theme.shadows[1],
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(6px)',
      },
    },
  ],
}))

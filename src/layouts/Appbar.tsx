import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'
import { AppBar, styled, type AppBarProps } from '@mui/material'

export default function Appbar() {
  const { offsetTop: isOffset } = useScrollOffsetTop()

  return <AppbarRoot position="sticky" component="header" isOffset={isOffset}></AppbarRoot>
}

const AppbarRoot = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'isOffset',
})<{ isOffset: boolean } & AppBarProps>(({ isOffset }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  top: 0,
  backgroundImage: 'none',
  overflow: 'hidden',
  height: 56,
  boxShadow: isOffset ? '2px 2px 8px 0 rgba(0, 0, 0, 0.05)' : 'none',
  transition: 'box-shadow 0.3s ease',
  width: '100%',
}))

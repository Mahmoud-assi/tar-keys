import AnimateButton from '@/components/AnimateButton'
import { useRouter } from '@/hooks/useRouter'
import type { AppbarKey } from '@/types/custom'
import { Button } from '@mui/material'
import { useIntl } from 'react-intl'

interface AppbarNavItemProps {
  item: { title: AppbarKey; path: string }
  isActive: boolean
}

export default function AppbarNavItem({ item, isActive }: AppbarNavItemProps) {
  const { formatMessage: f } = useIntl()
  const { replace } = useRouter()

  const handleClick = () => {
    const sectionId = item.path.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset
      const offset = 56
      window.scrollTo({
        top: topPos - offset,
        behavior: 'smooth',
      })
      replace(item.path)
    }
  }

  return (
    <AnimateButton type="scale" scale={{ hover: 1.025, tap: 1.05 }}>
      <Button
        onClick={handleClick}
        variant="text"
        sx={{
          color: isActive ? 'primary.main' : 'grey.400',
          filter: isActive ? 'drop-shadow(0.5px 1px 0px var(--palette-secondary-main))' : 'none',
        }}
      >
        {f({ id: item.title })}
      </Button>
    </AnimateButton>
  )
}

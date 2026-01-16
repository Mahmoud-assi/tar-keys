import { SelectedCourseCategoryAtom } from '@/atoms/Courses'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useAtom } from 'jotai'
import { useIntl } from 'react-intl'

export default function CourseSelection() {
  const { formatMessage: f } = useIntl()
  const [selected, setSelected] = useAtom(SelectedCourseCategoryAtom)

  return (
    <Box>
      <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={(_, val) => setSelected(val)}
      >
        {['core_sciences', 'mathematics', 'languages'].map(val => (
          <ToggleButton value={val} key={val} sx={{ lineHeight: 'normal' }}>
            {f({ id: val })}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  )
}

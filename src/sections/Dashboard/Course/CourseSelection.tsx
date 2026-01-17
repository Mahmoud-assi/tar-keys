import {
  CourseBranch,
  CourseType,
  SelectedCourseBranchAtom,
  SelectedCourseTypeAtom,
} from '@/atoms/Courses'
import { useDropdown } from '@/hooks/useDropdown'
import { enumKeys } from '@/utils/enums'
import {
  alpha,
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material'
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import type { LabelValue } from '@/types/custom'
import { useAtom } from 'jotai'

export default function CourseSelection() {
  const { formatMessage: f } = useIntl()
  const [selectedBranch, setSelectedBranch] = useAtom(SelectedCourseBranchAtom)
  const [selectedType, setSelectedType] = useAtom(SelectedCourseTypeAtom)
  const dropdown1 = useDropdown()
  const dropdown2 = useDropdown()

  const branchOptions = useMemo(
    () =>
      enumKeys(CourseBranch).map(key => ({
        label: f({ id: key }),
        value: CourseBranch[key],
      })),
    [f],
  )

  const typeOptions = useMemo(
    () =>
      enumKeys(CourseType).map(key => ({
        label: f({ id: key }),
        value: CourseType[key],
      })),
    [f],
  )

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      spacing={1}
    >
      <PopperButton
        title={f({ id: 'branch' })}
        dropdown={dropdown1}
        options={branchOptions}
        handleSelectOption={option => setSelectedBranch(option)}
        value={selectedBranch as LabelValue<CourseBranch>}
      />
      <PopperButton
        title={f({ id: 'courseType' })}
        dropdown={dropdown2}
        options={typeOptions}
        handleSelectOption={option => setSelectedType(option)}
        value={selectedType as LabelValue<CourseType>}
      />
    </Stack>
  )
}

function PopperButton({
  title,
  dropdown,
  options,
  value,
  handleSelectOption,
}: {
  title: string
  dropdown: ReturnType<typeof useDropdown>
  options: LabelValue[]
  value?: LabelValue
  handleSelectOption(option: LabelValue): void
}) {
  const { open, handleClose, anchorEl, handleToggle, anchorElWidth } = dropdown

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        <Stack spacing={{ xs: 0.5, sm: 1, md: 2 }} direction="row" alignItems="center">
          <Typography variant="subtitle1" fontSize={{ xs: 12, md: 16 }}>
            {title}
          </Typography>
          {': '}
          <Button
            onClick={handleToggle}
            endIcon={open ? <ExpandLess color="primary" /> : <ExpandMore color="primary" />}
            color="secondary"
            variant="outlined"
            sx={({ palette }) => ({
              justifyContent: 'space-between',
              fontSize: { xs: 12, md: 16 },
              minWidth: { xs: 100, md: 150 },
              color: 'text.primary',
              bgcolor: alpha(palette.primary.main, 0.2),
              ':hover': {
                bgcolor: alpha(palette.primary.dark, 0.2),
              },
              borderRadius: 2,
            })}
          >
            {value?.label ?? options?.[0]?.label ?? ''}
          </Button>
        </Stack>
        <Popper
          open={open}
          anchorEl={anchorEl}
          transition
          sx={{ zIndex: theme => theme.zIndex.tooltip }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={400}>
              <Paper sx={{ width: anchorElWidth }} variant="outlined">
                <MenuList>
                  {options.map((option, idx) => (
                    <MenuItem
                      key={idx}
                      sx={{ minHeight: 32, fontSize: { xs: 12, md: 16 } }}
                      onClick={() => {
                        handleSelectOption(option)
                        handleClose()
                      }}
                    >
                      {option?.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  )
}

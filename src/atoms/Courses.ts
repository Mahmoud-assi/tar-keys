import type { LabelValue } from '@/types/custom'
import { atom } from 'jotai'

export const CourseBranch = {
  scientific: 1,
  literary: 2,
} as const

export type CourseBranch = keyof typeof CourseBranch

export const CourseType = {
  foundation: 1,
  curriculum: 2,
  intensive: 3,
} as const

export type CourseType = keyof typeof CourseType

export const SelectedCourseBranchAtom = atom<LabelValue<CourseBranch>>()

export const SelectedCourseTypeAtom = atom<LabelValue<CourseType>>()

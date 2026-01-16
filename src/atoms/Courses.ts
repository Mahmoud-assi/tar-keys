import { atom } from 'jotai'

export const SelectedCourseCategoryAtom = atom<
  'core_sciences' | 'mathematics' | 'languages' | 'humanities'
>('core_sciences')

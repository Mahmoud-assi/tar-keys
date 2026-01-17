export type LocaleType = 'ar' | 'en'

export type AppbarKey =
  | 'home'
  | 'whyUs'
  | 'ourService'
  | 'exploreTarkeys'
  | 'frequentlyQuestions'
  | 'views'
  | 'courses'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface LabelValue<T = any> {
  label: string
  value: T
}

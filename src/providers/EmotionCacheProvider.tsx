import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/theme/createEmotionCache'
import { useMemo, type PropsWithChildren } from 'react'

export default function EmotionCacheProvider({
  direction,
  children,
}: { direction: 'ltr' | 'rtl' } & PropsWithChildren) {
  const cache = useMemo(() => createEmotionCache(direction), [direction])
  return <CacheProvider value={cache}>{children}</CacheProvider>
}

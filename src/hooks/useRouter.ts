import { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()

  const router = useMemo(
    () => ({
      pathname: location.pathname,
      query: Object.fromEntries(new URLSearchParams(location.search)),
      back: () => navigate(-1),
      forward: () => navigate(1),
      refresh: () => navigate(0),
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
      setQuery: (newQuery: Record<string, string>, replace = false) => {
        const params = new URLSearchParams(location.search)
        Object.entries(newQuery).forEach(([k, v]) => {
          if (v == null) params.delete(k)
          else params.set(k, v)
        })
        const search = params.toString()
        const newPath = `${location.pathname}${search ? `?${search}` : ''}`
        navigate(newPath, { replace })
      },
    }),
    [navigate, location],
  )

  return router
}

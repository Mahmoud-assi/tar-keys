import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routesSection } from '@/router'
import { LocalizationProvider, ThemeProvider } from '@/providers'
import { useEffect } from 'react'

const router = createHashRouter(routesSection)

export default function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    // Reset scroll to top on app mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <LocalizationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

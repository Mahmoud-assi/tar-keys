import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routesSection } from '@/router'
import { LocalizationProvider, ThemeProvider } from '@/providers'

const router = createHashRouter(routesSection)

export default function App() {
  return (
    <LocalizationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

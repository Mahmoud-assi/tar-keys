import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesSection } from '@/router'
import { LocalizationProvider, ThemeProvider } from '@/providers'

const router = createBrowserRouter(routesSection)

export default function App() {
  return (
    <LocalizationProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  )
}

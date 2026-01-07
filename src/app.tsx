import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routesSection } from './router'
import AppTheme from './providers/Theme'

const router = createBrowserRouter(routesSection)

export default function App() {
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  )
}

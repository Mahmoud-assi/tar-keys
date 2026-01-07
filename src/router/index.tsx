import { type RouteObject, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import { lazy } from 'react'
export const DashboardPage = lazy(() => import('@/pages/Dahsboard'))

// eslint-disable-next-line react-refresh/only-export-components
export const routesSection: RouteObject[] = [
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },
]

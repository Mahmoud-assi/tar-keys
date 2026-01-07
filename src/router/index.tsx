import { type RouteObject, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import { lazy, Suspense } from 'react'
import Loader from '@/components/Loader'
export const DashboardPage = lazy(() => import('@/pages/Dahsboard'))

// eslint-disable-next-line react-refresh/only-export-components
export const routesSection: RouteObject[] = [
  {
    element: (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },
]

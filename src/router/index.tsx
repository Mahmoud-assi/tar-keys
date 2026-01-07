import { type RouteObject, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import { lazy, Suspense } from 'react'
import { PageLoading } from '@/components/PageLoading'
export const DashboardPage = lazy(() => import('@/pages/Dahsboard'))

// eslint-disable-next-line react-refresh/only-export-components
export const routesSection: RouteObject[] = [
  {
    element: (
      <Layout>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [{ index: true, element: <DashboardPage /> }],
  },
]

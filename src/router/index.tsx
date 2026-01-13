import { type RouteObject, Outlet } from 'react-router-dom'
import Layout from '@/layouts'
import { lazy, Suspense } from 'react'
import Loader from '@/components/Loader'
import routes from './routes'

export const DashboardPage = lazy(() => import('@/pages/Dahsboard'))
export const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicy'))
export const TermsOfUsePage = lazy(() => import('@/pages/TermsOfUse'))

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
    children: [
      { index: true, element: <DashboardPage /> },
      { path: routes.privacyPolicy, element: <PrivacyPolicyPage /> },
      { path: routes.termsOfuse, element: <TermsOfUsePage /> },
    ],
  },
]

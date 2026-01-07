import { Suspense, type LazyExoticComponent, type ComponentType } from 'react'
import Loader from './Loader'

export default function Loadable<P extends object>(
  Component: LazyExoticComponent<ComponentType<P>>,
) {
  return (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
}

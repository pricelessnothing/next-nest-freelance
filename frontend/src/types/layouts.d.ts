import { ReactNode } from 'react'
import { RouteProps } from 'react-router-dom'

export type CustomRouteProps = RouteProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
}

export type LayoutProps = {
  children: ReactNode
}

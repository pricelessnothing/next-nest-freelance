import { Route } from 'react-router-dom'
import { CustomRouteProps, LayoutProps } from '../types/layouts'

const DefaultLayout = ({ children }: LayoutProps) => <div>{children}</div>

const DefaultLayoutRoute = ({
  component: Component,
  ...rest
}: CustomRouteProps) => (
  <Route
    {...rest}
    render={(props) => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
)

export default DefaultLayoutRoute

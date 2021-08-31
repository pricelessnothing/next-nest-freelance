import { Route } from 'react-router-dom'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import { CustomRouteProps, LayoutProps } from '../types/layouts'

import './default.layout.sass'

const DefaultLayout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

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

import { Switch } from 'react-router-dom'
import DefaultLayoutRoute from './layouts/default.layout'
import { AuthPage } from './views/auth/Auth'
import { HomePage } from './views/Home'

export const Router = () => (
  <Switch>
    <DefaultLayoutRoute exact path="/" component={HomePage} />
    <DefaultLayoutRoute path="/auth" component={AuthPage} />
  </Switch>
)

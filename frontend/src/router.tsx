import { Switch } from 'react-router-dom'
import DefaultLayoutRoute from './layouts/default.layout'
import { HomePage } from './views/Home'

export const Router = () => (
  <Switch>
    <DefaultLayoutRoute path="/" component={HomePage} />
  </Switch>
)

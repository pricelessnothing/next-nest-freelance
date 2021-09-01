import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'

import './styles/global.sass'

export const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

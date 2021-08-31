import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'

import './styles/global.sass'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './styles/index.scss'

ReactDOM.render(
<<<<<<< HEAD
  <Router>
    <App />
  </Router>,
=======
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
>>>>>>> Before eject
  document.getElementById('root'),
)

<<<<<<< HEAD
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Home } from './pages'

const App = () => {
  const [isAuth, setIsAuth] = React.useState(true)

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/signin', '/signup']} render={() => <Auth />} />
        <Route path="/" render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)} />
      </Switch>
    </div>
  )
}

export default App
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> Initialize project using Create React App

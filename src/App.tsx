import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Home } from './pages'

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false)

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

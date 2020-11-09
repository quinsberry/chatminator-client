import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Auth, Home } from '@pages'

export const App = () => {
  const [isAuth, setIsAuth] = React.useState(true)

  // This effect close a preloader of page when app initialized
  useEffect(() => {
    const ele = document.getElementById('preloader')
    if (ele) {
      // fade out
      ele?.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        if (ele) ele.outerHTML = ''
      }, 2000)
    }
  }, [])

  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/signin', '/signup']} render={() => (isAuth ? <Redirect to="/" /> : <Auth />)} />
        <Route path="/" render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)} />
      </Switch>
    </div>
  )
}

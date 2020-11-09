import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginFormContainer, RegisterFormContainer } from '@components'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="auth">
      <Switch>
        <Route exact path="/signin" render={() => <LoginFormContainer />} />
        <Route exact path="/signup" render={() => <RegisterFormContainer />} />
      </Switch>
    </section>
  )
}

export default Auth

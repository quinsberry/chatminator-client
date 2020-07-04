import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginForm, RegisterFormContainer } from '../../components'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="auth">
      <Switch>
        <Route exact path="/signin" render={() => <LoginForm />} />
        <Route
          exact
          path="/signup"
          render={() => <RegisterFormContainer email="" name="" password="" confirmPassword="" />}
        />
      </Switch>
    </section>
  )
}

export default Auth

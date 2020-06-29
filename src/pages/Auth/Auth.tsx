import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LoginForm, RegisterForm } from '../../components'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="auth">
      <Switch>
        <Route path="/" render={() => <Redirect to="/login" />} exact />
        <Route path="/login" render={() => <LoginForm />} />
        <Route path="/register" render={() => <RegisterForm />} />
        <Redirect to="/login" />
      </Switch>
    </section>
  )
}

export default Auth

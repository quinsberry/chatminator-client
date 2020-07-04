import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginForm, RegisterFormContainer } from '../../components'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="auth">
      <Switch>
        <Route exact path="/signin" render={() => <LoginForm />} />
<<<<<<< HEAD
        <Route exact path="/signup" render={() => <RegisterFormContainer />} />
=======
        <Route
          exact
          path="/signup"
          render={() => <RegisterFormContainer email="" name="" password="" confirmPassword="" />}
        />
>>>>>>> Before eject
      </Switch>
    </section>
  )
}

export default Auth

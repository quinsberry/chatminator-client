import React from 'react'
import { Link } from 'react-router-dom'
import { FormikProps } from 'formik'

import { Button, Block } from '../common'
import { validateField } from '../../utils/helpers'

import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { TLoginFormValues } from '../../types/types'

interface OtherProps {}

const LoginForm = (props: OtherProps & FormikProps<TLoginFormValues>) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props

  return (
    <div className="auth__content">
      <div className="auth__top">
        <h2>Sign in</h2>
        <p>Continue to you account</p>
      </div>
      <Block>
        <Form className="login-form">
          <Form.Item
            name="email"
            hasFeedback
            validateStatus={validateField('email', touched, errors)}
            help={!touched.email ? null : errors.email}>
            <Input
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            validateStatus={validateField('name', touched, errors)}
            help={!touched.password ? null : errors.password}>
            <Input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={handleSubmit}
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signup">
            Register now!
          </Link>
        </Form>
      </Block>
    </div>
  )
}

export default LoginForm

import React from 'react'
import { Link } from 'react-router-dom'
import { FormikProps } from 'formik'

import { Button, Block } from '@components/common'
import { validateField } from '@utils/helpers'

import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'

import { TRegistrationFormValues } from 'types/types'

interface OtherProps {}

const LoginForm = (props: OtherProps & FormikProps<TRegistrationFormValues>) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props
  const [registeredSuccess, setRegisteredSuccess] = React.useState(false)
  return (
    <div className="auth__content">
      <div className="auth__top">
        <h2>Sign up</h2>
        <p>You have to sign up to enter the chat</p>
      </div>
      <Block>
        {registeredSuccess ? (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: '50px' }} />
            </div>
            <h2>Confirm you account</h2>
            <p>We sent an email on your mailbox with link that verify you account</p>
          </div>
        ) : (
          <Form className="registration-form">
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
                prefix={<MailOutlined />}
                size="large"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="name"
              hasFeedback
              validateStatus={validateField('name', touched, errors)}
              help={!touched.name ? null : errors.name}>
              <Input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              validateStatus={validateField('password', touched, errors)}
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
            <Form.Item
              name="confirmPassword"
              hasFeedback
              validateStatus={validateField('confirmPassword', touched, errors)}
              help={!touched.confirmPassword ? null : errors.confirmPassword}>
              <Input
                value={values.confirmPassword}
                disabled={errors.password ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Confirm your password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button">
                Sign up
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Back to Log in
            </Link>
          </Form>
        )}
      </Block>
    </div>
  )
}

export default LoginForm

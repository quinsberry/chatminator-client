import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { FormikProps } from 'formik'
=======
>>>>>>> Before eject

import { Button, Block } from '../common'

import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'

<<<<<<< HEAD
import { TFormValues } from '../../types/types'

interface OtherProps {}

const LoginForm = (props: OtherProps & FormikProps<TFormValues>) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props
  const [registeredSuccess, setRegisteredSuccess] = React.useState(false)

=======
import { Store } from 'rc-field-form/lib/interface'
import { FormikProps, FormikErrors } from 'formik'

// Shape of form values
interface FormValues {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

interface OtherProps {}

const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
  console.log('props values: ', props.values)
  const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, dirty} = props
  const [registeredSuccess, setRegisteredSuccess] = React.useState(false)

  const onFinish = (values: Store) => {
    console.log('Success:', values)
    setRegisteredSuccess(true)
  }
>>>>>>> Before eject
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
<<<<<<< HEAD
          <Form className="login-form">
            <Form.Item
              name="email"
              hasFeedback
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
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
              validateStatus={!touched.name ? '' : errors.name ? 'error' : 'success'}
              help={!touched.name ? null : errors.name}>
              <Input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
=======
            <Form className="login-form" onFinish={handleSubmit}>
            <Form.Item
              hasFeedback
              validateStatus="validating"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input prefix={<MailOutlined />} size="large" placeholder="Email" value={email} />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input
>>>>>>> Before eject
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              name="password"
<<<<<<< HEAD
              hasFeedback
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              help={!touched.password ? null : errors.password}>
              <Input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
=======
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input
>>>>>>> Before eject
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
<<<<<<< HEAD
              name="confirmPassword"
              hasFeedback
              validateStatus={
                !touched.confirmPassword ? '' : errors.confirmPassword ? 'error' : 'success'
              }
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
=======
              name="repeated-password"
              rules={[{ required: true, message: 'Please repeat you password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Repeat your password"
>>>>>>> Before eject
              />
            </Form.Item>

            <Form.Item>
<<<<<<< HEAD
              <Button
                onClick={handleSubmit}
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button">
=======
              <Button type="primary" size="large" htmlType="submit" className="login-form-button">
>>>>>>> Before eject
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

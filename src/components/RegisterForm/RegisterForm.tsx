import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Block } from '../common'

import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'

import { Store } from 'rc-field-form/lib/interface'

const LoginForm = () => {
  const [registeredSuccess, setRegisteredSucces] = React.useState(false)

  const onFinish = (values: Store) => {
    console.log('Success:', values)
    setRegisteredSucces(true)
  }
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
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
              hasFeedback
              validateStatus="success"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input prefix={<MailOutlined />} type="email" size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="repeated-password"
              rules={[{ required: true, message: 'Please repeat you password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Repeat your password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                Sign up
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Back to Log in
            </Link>
          </Form>
        )}
      </Block>
    </div>
  )
}

export default LoginForm

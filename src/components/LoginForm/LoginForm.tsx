import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Block } from '../common'

import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { Store } from 'rc-field-form/lib/interface'

const LoginForm = () => {
  const onFinish = (values: Store) => {
    console.log('Success:', values)
  }
  return (
    <div className="auth__content">
      <div className="auth__top">
        <h2>Sign in</h2>
        <p>Continue to you account</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            hasFeedback
            validateStatus="success"
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
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

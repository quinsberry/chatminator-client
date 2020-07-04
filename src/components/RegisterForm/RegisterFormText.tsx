// import React from 'react'
// import { Link } from 'react-router-dom'

// import { Button, Block } from '../common'

// import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons'

// import { Form, Input } from 'formik-antd'

// import { Store } from 'rc-field-form/lib/interface'
// import { Formik, FormikProps } from 'formik'

// // Shape of form values
// interface FormValues {
//   email?: string
//   name?: string
//   password?: string
//   confirmPassword?: string
// }

// interface OtherProps {}

// const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
//   console.log('props values: ', props.values)
//   const {
//     values,
//     touched,
//     errors,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     handleReset,
//     dirty,
//   } = props
//   const [registeredSuccess, setRegisteredSuccess] = React.useState(false)

//   const onFinish = (values: Store) => {
//     console.log('Success:', values)
//     setRegisteredSuccess(true)
//   }
//   return (
//     <div className="auth__content">
//       <div className="auth__top">
//         <h2>Sign up</h2>
//         <p>You have to sign up to enter the chat</p>
//       </div>
//       <Block>
//         {registeredSuccess ? (
//           <div className="auth__success-block">
//             <div>
//               <InfoCircleTwoTone style={{ fontSize: '50px' }} />
//             </div>
//             <h2>Confirm you account</h2>
//             <p>We sent an email on your mailbox with link that verify you account</p>
//           </div>
//         ) : (
//           <Formik
//             initialValues={{ email: 'qweqwe' }}
//             onSubmit={onFinish}
//             render={() => (
//               <Form className="login-form">
//                 <Input name="email" prefix={<MailOutlined />} size="large" placeholder="Email" />
//                 <Input
//                   name="name"
//                   prefix={<UserOutlined className="site-form-item-icon" />}
//                   size="large"
//                   placeholder="Your name"
//                 />
//                 <Input
//                   name="password"
//                   prefix={<LockOutlined className="site-form-item-icon" />}
//                   type="password"
//                   size="large"
//                   placeholder="Password"
//                 />
//                 <Input
//                   name="confirmPassword"
//                   prefix={<LockOutlined className="site-form-item-icon" />}
//                   type="password"
//                   size="large"
//                   placeholder="Repeat your password"
//                 />

//                 <Button type="primary" size="large" htmlType="submit" className="login-form-button">
//                   Sign up
//                 </Button>
//                 <Link className="auth__register-link" to="/signin">
//                   Back to Log in
//                 </Link>
//               </Form>
//             )}
//           />
//         )}
//       </Block>
//     </div>
//   )
// }

// export default LoginForm

import React from 'react'
import { Formik } from 'formik'
import { Form, Input, InputNumber, Checkbox } from 'formik-antd'

function App() {
  const handleSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={{ firstName: '', age: 20, newsletter: false }}
      onSubmit={handleSubmit}
      render={() => (
        <Form>
          <Input name="firstName" placeholder="First Name" />
          <InputNumber name="age" min={0} />
          <Checkbox name="newsletter">Newsletter</Checkbox>
        </Form>
      )}
    />
  )
}

export default App

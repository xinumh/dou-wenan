import React from 'react'
import { useAuth } from '@/components/AuthProvider/useAuth'
import { Button, Form, Input } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const auth = useAuth()
  const [form] = Form.useForm()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const onFinish = (values: any) => {
    console.log('values', values)
    auth.signin(values, () => {
      navigate(from, { replace: true })
    })
  }
  return (
    <div>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name='username' rules={[{ required: true }]}>
          <Input type='text' placeholder='Enter your username' />
        </Form.Item>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login

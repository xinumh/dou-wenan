import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/')
  }
  return (
    <div className='login'>
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleLogin}>登录</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login

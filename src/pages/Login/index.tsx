import { Button, Form, Input } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { useAuth } from '@/AuthProvider'

function Login() {
  const auth = useAuth()
  const [form] = Form.useForm()
  const location = useLocation() as any
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const onFinish = (values: any) => {
    const { username } = values
    auth.signin(username, () => {
      // replace 避免回退到login页面，符合用户体验
      navigate(from, { replace: true })
    })
  }
  return (
    <div className={styles.login}>
      <Form className='form' form={form} onFinish={onFinish}>
        <Form.Item label='用户名' name='username'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login

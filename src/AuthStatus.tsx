import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <Button
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sign out
      </Button>
    </p>
  )
}

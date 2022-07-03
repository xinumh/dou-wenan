import React from 'react'
import { useAuth } from '@/components/AuthProvider/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth

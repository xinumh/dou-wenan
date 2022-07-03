import React from 'react'
import { AuthContext } from '@/components/AuthProvider'

function useAuth() {
  return React.useContext(AuthContext)
}

export { useAuth }

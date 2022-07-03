import React from 'react'
import { AuthContextType, fakeAuthProvider } from './auth'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<any>(null)

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }
  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider

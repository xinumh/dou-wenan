import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.less'
import AuthProvider, { RequireAuth } from './AuthProvider'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

function Router() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {
      path: '/layout',
      element: (
        <RequireAuth>
          <Layout />
        </RequireAuth>
      )
    }
  ])
  return routes
}
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

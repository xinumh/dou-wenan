import React from 'react'
import { BrowserRouter, Link, useRoutes } from 'react-router-dom'
import './App.less'
import Home from './components/Home'
import Login from './components/Login'

function Router() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> }
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ol>
          <Link to='/'>home</Link>
          <Link to='/login'>login</Link>
        </ol>
      </nav>
      <Router />
    </BrowserRouter>
  )
}

export default App

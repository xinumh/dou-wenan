import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <p>Layout</p>
      <Link to='/home'>toHome</Link>
    </div>
  )
}

export default Layout

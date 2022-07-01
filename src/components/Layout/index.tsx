import React from 'react'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

import './index.less'

const Layout = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const toogle = () => {
    setCollapsed(!collapsed)
  }
  const mainClassNames = classNames({
    main: true,
    collapsed
  })

  return (
    <div className='layout'>
      <SideBar onToogle={toogle} collapsed={collapsed} />
      <div className={mainClassNames}>
        <Header />
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout

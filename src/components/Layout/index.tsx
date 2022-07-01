import React from 'react'
import { Menu } from 'antd'
import IconSvg from '@/components/Icon'
import Header from '@/components/Header'
import classNames from 'classnames'

import logo from '@/assets/logo.svg'
import './index.less'
import { Outlet } from 'react-router-dom'

const { SubMenu } = Menu

const Layout = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const toogle = () => {
    setCollapsed(!collapsed)
  }

  const subMenuClassName = classNames({
    'sub-menu-wrap': true,
    hide: collapsed
  })

  const mainClassNames = classNames({
    main: true,
    collapsed
  })

  return (
    <div className='layout'>
      <div className='sidebar'>
        {collapsed ? (
          <IconSvg
            className='icon-toggle'
            width={17}
            height={50}
            onClick={toogle}
            color='red'
            name='menu-open'
          />
        ) : (
          <IconSvg
            className='icon-toggle'
            width={17}
            height={50}
            onClick={toogle}
            name='menu-close'
          />
        )}

        <div className='menu-wrap'>
          <div className='menu-header'>
            <img className='logo' src={logo} alt='' />
          </div>
          <div className='menu'>
            <Menu>
              <Menu.Item key='21'>菜单项1</Menu.Item>
              <Menu.Item key='31'>菜单项2</Menu.Item>
              <Menu.Item key='41'>菜单项3</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={subMenuClassName}>
          <div className='menu-header border-b'>
            <div className='menu-header-name'>商品</div>
          </div>
          <Menu mode='inline' expandIcon='' className='sub-menu-list'>
            <SubMenu key='sub1' title='采购管理'>
              <Menu.Item key='1'>Option 1</Menu.Item>
              <Menu.Item key='2'>Option 2</Menu.Item>
              <Menu.Item key='3'>Option 3</Menu.Item>
              <Menu.Item key='4'>Option 4</Menu.Item>
            </SubMenu>
            <Menu.Item key='31'>菜单项2</Menu.Item>
            <Menu.Item key='41'>菜单项3</Menu.Item>
          </Menu>
        </div>
      </div>
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

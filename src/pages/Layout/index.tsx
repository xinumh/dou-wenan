import { Menu } from 'antd'
import React from 'react'
import './index.less'
import classNames from 'classnames'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import logo from '@/assets/logo.svg'
import AuthStatus from '@/AuthStatus'

const { SubMenu } = Menu
function Layout() {
  const [collapsed, setCollapsed] = React.useState(false)
  const subMenuClassName = classNames({
    'sub-menu-wrap': true,
    hide: collapsed
  })

  const mainClassNames = classNames({
    main: true,
    collapsed
  })

  const toogle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='layout'>
      <div className='sidebar'>
        {collapsed ? (
          <CaretRightOutlined className='icon-toggle' onClick={toogle} />
        ) : (
          <CaretLeftOutlined className='icon-toggle' onClick={toogle} />
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
          <div className='menu-header border-b'>商品</div>
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
        <div className='header'>
          <AuthStatus />
        </div>
        <div className='content'>
          <div className='box'>content</div>
        </div>
      </div>
    </div>
  )
}

export default Layout

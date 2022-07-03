import classNames from 'classnames'
import React from 'react'
import IconSvg from '@/components/Icon'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import logo from '@/assets/logo.svg'
import {
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined,
  UnlockOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { fetchUserInfo } from './service'
import './index.less'

type SideBarProps = {
  collapsed: boolean
  onToogle: () => void
}
type MenuItem = Required<MenuProps>['items'][number]
function SideBar({ collapsed, onToogle }: SideBarProps) {
  const [current, setCurrent] = React.useState('home')
  const [subCurrent, setSubCurrent] = React.useState(['1'])
  let navigate = useNavigate()

  const subMenuClassName = classNames({
    'sub-menu-wrap': true,
    hide: collapsed
  })

  React.useEffect(() => {
    fetchUserInfo({})
  })

  const items: MenuProps['items'] = [
    {
      label: '首页',
      key: 'home',
      icon: <HomeOutlined />
    },
    {
      label: '权限',
      key: 'courses',
      icon: <UnlockOutlined />
    },
    {
      label: '设置',
      key: 'setting',
      icon: <SettingOutlined />
    },
    {
      label: '菜单',
      key: 'menu',
      icon: <ProfileOutlined />
    }
  ]

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem
  }
  const subItems: MenuItem[] = [
    getItem('采购管理', '1'),
    getItem('订单管理', '2'),
    getItem('销售管理', 'sub1', null, [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6')
      ])
    ]),
    getItem('金融管理', 'sub2', null, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10')
    ]),
    getItem(
      <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
        Ant Design
      </a>,
      'link'
    )
  ]

  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    navigate(key, { replace: true })
    setCurrent(key)
    collapsed && onToogle()
  }
  const handleSubSelect: MenuProps['onSelect'] = ({ key }) => {
    setSubCurrent([key])
  }

  return (
    <div className='sidebar'>
      <IconSvg
        className='icon-toggle'
        width={17}
        height={50}
        onClick={onToogle}
        name={collapsed ? 'menu-close' : 'menu-open'}
      />
      <div className='menu-wrap'>
        <div className='menu-header'>
          <img className='logo' src={logo} alt='' />
        </div>
        <div className='menu'>
          <Menu
            items={items}
            selectedKeys={[current]}
            onSelect={handleSelect}
          ></Menu>
        </div>
      </div>
      <div className={subMenuClassName}>
        <div className='menu-header border-b'>
          <div className='menu-header-name'>商品</div>
        </div>
        <Menu
          items={subItems}
          mode='inline'
          selectedKeys={subCurrent}
          onSelect={handleSubSelect}
        ></Menu>
      </div>
    </div>
  )
}

export default SideBar

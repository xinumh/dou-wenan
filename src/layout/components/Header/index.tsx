import {
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Menu,
  MenuProps,
  Space
} from 'antd'
import avatar from '@/assets/avatar.gif'
import './index.less'
import { useAuth } from '@/components/AuthProvider/useAuth'
import { useNavigate } from 'react-router-dom'
import React from 'react'

type IHeaderProps = {
  collapsed: boolean
  trigger: (val: boolean) => void
}
export default function LayoutHeader({ collapsed, trigger }: IHeaderProps) {
  const auth = useAuth()
  const navigate = useNavigate()
  const menus = [
    {
      label: '退出登录',
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ]

  const handleMenu: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        auth.signout(() => {
          navigate('/login')
        })
    }
  }

  return (
    <header className='layout-header'>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => trigger(!collapsed)
      })}

      <Space size={10} className='w-32'>
        <Avatar src={avatar} />
        <Dropdown
          overlay={<Menu items={menus} onClick={handleMenu} />}
          trigger={['click']}
          className='text-center mr-3'
          placement='bottom'
          arrow={{ pointAtCenter: true }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span>admin</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Space>
    </header>
  )
}

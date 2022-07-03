import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
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

export default function Header() {
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
    <div className='header'>
      <div className='p-3'>
        <Breadcrumb separator='>'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href=''>Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href=''>Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
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
    </div>
  )
}

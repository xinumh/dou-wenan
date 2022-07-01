import { DownOutlined, LogoutOutlined } from '@ant-design/icons'
import { Avatar, Breadcrumb, Button, Dropdown, Menu, Space } from 'antd'
import style from './index.module.less'
import avatar from '@/assets/avatar.gif'

export default function Header() {
  const menu = (
    <Menu>
      <Menu.Item key='1' icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={style.header}>
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
          overlay={menu}
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

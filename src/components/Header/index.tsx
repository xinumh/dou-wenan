import { DownOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import style from './index.module.less'

export default function Header() {
  const menu = (
    <Menu>
      <Menu.Item key='1'>Option 1</Menu.Item>
    </Menu>
  )
  return (
    <div className={style.header}>
      <div className='mt-2'>
        <Button>Default</Button>
        <Button>Default</Button>
      </div>
    </div>
  )
}

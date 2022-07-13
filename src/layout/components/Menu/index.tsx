import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import * as Icons from '@ant-design/icons'
import Logo from '@/layout/components/Logo'
import './index.less'

type IProps = {
  collapsed: boolean
}
type MenuItem = Required<MenuProps>['items'][number]
const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

type MenuDataItem = {
  title: string
  path: string
  icon: string
  children?: MenuDataItem[]
}

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons
const addIcon = (name: string) => {
  return React.createElement(customIcons[name])
}

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
  let newStr: string = ''
  let newArr: any[] = []
  let arr = path.split('/').map((i) => '/' + i)
  for (let i = 1; i < arr.length - 1; i++) {
    newStr += arr[i]
    newArr.push(newStr)
  }
  return newArr
}

const data = [
  { icon: 'HomeOutlined', path: '/home', title: '首页' },
  {
    icon: 'TableOutlined',
    path: '/permission',
    title: '权限管理',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/permission/user',
        title: '用户管理'
      },
      {
        icon: 'AppstoreOutlined',
        path: '/permission/role',
        title: '角色管理'
      }
    ]
  },
  {
    icon: 'FundOutlined',
    path: '/dashboard',
    title: 'Dashboard',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/dashboard/dataVisualize',
        title: '数据可视化'
      }
    ]
  }
]

const LayoutMenu = ({ collapsed }: IProps) => {
  console.log('useLocation()', useLocation())
  const { pathname } = useLocation()
  const [menuList, setMenuList] = React.useState<MenuItem[]>([])
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([pathname])
  const navigate = useNavigate()

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (
    menuList: MenuDataItem[],
    floatedList: MenuItem[] = []
  ) => {
    menuList.forEach((item: MenuDataItem) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length) {
        return floatedList.push(
          getItem(item.title, item.path, addIcon(item.icon!))
        )
      }
      floatedList.push(
        getItem(
          item.title,
          item.path,
          addIcon(item.icon!),
          deepLoopFloat(item.children)
        )
      )
    })
    return floatedList
  }

  const getMenuData = async () => {
    setMenuList(deepLoopFloat(data))
  }

  React.useEffect(() => {
    getMenuData()
  }, [])

  React.useEffect(() => {
    setSelectedKeys([pathname])
    collapsed ? null : setOpenKeys(getOpenKeys(pathname))
  }, [collapsed, pathname])

  // 设置当前展开的 subMenu
  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    console.log('openKeys', openKeys)
    if (openKeys.length === 0 || openKeys.length === 1)
      return setOpenKeys(openKeys)
    const latestOpenKey = openKeys[openKeys.length - 1]
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
    setOpenKeys([latestOpenKey])
  }

  /* 点击跳转 */
  const opnClick: MenuProps['onClick'] = ({ key }) => {
    console.log('key', key)
    /* 判断外部链接，window.open(key, '_blank') */
    navigate(key, { replace: true })
  }

  return (
    <div className='layout'>
      <Logo collapsed={collapsed} />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={menuList}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={opnClick}
      />
    </div>
  )
}

export default LayoutMenu

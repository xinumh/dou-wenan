import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu'
import LayoutHeader from './components/Header'
import './index.less'

const { Sider, Content, Footer } = Layout

const AppLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <Layout className='side-menu'>
      <Sider trigger={null} collapsible collapsed={collapsed} width={220}>
        <LayoutMenu collapsed={collapsed} />
      </Sider>
      <Layout className='site-layout'>
        <LayoutHeader trigger={setCollapsed} collapsed={collapsed} />
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout

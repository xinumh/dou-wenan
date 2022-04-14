import React from 'react'
import { Button } from 'antd'
import { UserInfoType } from '@/@type'
import img from '@/assets/bg.jpg'
import './App.less'

interface IProps {
  tab: string
}
function App({ tab }: IProps) {
  // console.log('props', props);
  const user: UserInfoType = {
    username: '1111'
  }
  return (
    <div className='app'>
      <div>home {tab}</div>
      <div>user {user.username}</div>
      <Button type='primary'>Button</Button>
      <img src={img} alt='' srcSet='' />
    </div>
  )
}

export default App

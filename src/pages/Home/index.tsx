import React, { ReactHTMLElement } from 'react'
import { fetchList } from './service'
import { useAuth } from '@/components/AuthProvider/useAuth'
type Props = {}

const Home = (props: Props) => {
  const auth = useAuth()
  console.log('auth', auth)
  const [name, setName] = React.useState('')

  const onSubmit = () => {
    fetchList({ username: name, password: '123456' })
  }
  return (
    <div>
      Home 1111
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSubmit}>fetchList</button>
    </div>
  )
}

export default Home

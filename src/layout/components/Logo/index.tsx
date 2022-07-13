import logo from '@/assets/logo.svg'
import './index.less'

type Props = {
  collapsed: boolean
}

const Logo = ({ collapsed }: Props) => {
  return (
    <div className='logo-box'>
      <img src={logo} alt='logo' className='logo' />
      {!collapsed ? <h2 className='logo-text'>Hooks Admin</h2> : null}
    </div>
  )
}

export default Logo

import { useRoutes } from 'react-router-dom'
import routes from '@/routes/index'
import AuthProvider from '@/components/AuthProvider'

function App() {
  const element = useRoutes(routes)
  return <AuthProvider>{element}</AuthProvider>
}

export default App

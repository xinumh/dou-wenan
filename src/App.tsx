import { useRoutes } from "react-router-dom"
import routes from '@/routes/index'

function App() {

  const element = useRoutes(routes)
  return (
    <div>
      <h1>Route Objects Example</h1>
      {element}
    </div>
  )
}

export default App

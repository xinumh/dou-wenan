import { RouteObject, useRoutes } from 'react-router-dom'
import Course from '@/pages/Course'
import Courses from '@/pages/Courses'
import CoursesIndex from '@/pages/CoursesIndex'
import Layout from '@/components/Layout'
import NoMatch from '@/pages/NoMatch'
import Home from '@/pages/Home'
import RequireAuth from '@/components/AuthProvider/RequireAuth'
import Login from '@/pages/Login'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  { path: '*', element: <NoMatch /> },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/courses',
        element: <Courses />,
        children: [
          {
            index: true,
            element: <CoursesIndex />
          },
          {
            path: '/courses/:id',
            element: <Course />
          }
        ]
      }
    ]
  }
]

export default routes

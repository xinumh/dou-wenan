import { Link, Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Course from '@/pages/Course'
import Courses from '@/pages/Courses'
import CoursesIndex from '@/pages/CoursesIndex'
import Layout from '@/layout'
import NoMatch from '@/pages/NoMatch'
import Home from '@/pages/Home'
import RequireAuth from '@/components/AuthProvider/RequireAuth'
import Login from '@/pages/Login'

import User from '@/pages/permission/user'
import Role from '@/pages/permission/role'
import Dashboard from '@/pages/dashboard'

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
        path: 'dashboard',
        element: <Dashboard />
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
      },
      {
        path: '/permission',
        children: [
          {
            path: 'user',
            element: <User />
          },
          {
            path: 'role',
            element: <Role />
          }
        ]
      }
    ]
  }
]

export default routes

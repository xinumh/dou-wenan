import { RouteObject, useRoutes } from "react-router-dom"
import Course from '@/pages/Course'
import Courses from "@/pages/Courses"
import CoursesIndex from "@/pages/CoursesIndex"
import Layout from "@/pages/Layout"
import NoMatch from "@/pages/NoMatch"
import Home from '@/pages/Home'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
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
            element: <CoursesIndex />,
          },
          {
            path: '/courses/:id',
            element: <Course />
          }
        ]
      },
      { path: '*', element: <NoMatch /> }
    ]
  }
]


export default routes

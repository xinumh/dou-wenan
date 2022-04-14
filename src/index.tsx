import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
// Create a root.
const root = createRoot(container as never)

// Initial render: Render an element to the root.
root.render(<App />)

// During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcome from './components/Welcome.jsx'
import Search from './components/SearchBar.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/search',
    element: <Search />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

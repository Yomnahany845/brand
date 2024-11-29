import React from 'react'
import Home from './Component/Home'
import Layout from './Component/Layout'
import Products from './Component/Products'
import Cart from './Component/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailsproduct from './Component/Detailsproduct'
function App() {
const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        index:true,
        element: <Home />,
      },
      {
        path:"/products",
        element:<Products />,
      },
      {
        path:"/products/:id",
        element:<Detailsproduct />,
      },
      {
        path:"/cart",
        element:<Cart />,
      }
    ]
  }
])
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App


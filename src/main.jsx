import React from 'react'
import ReactDOM from 'react-dom/client'

/*Configuro el router */
import { Router } from './Router/Router'
import { RouterProvider } from 'react-router-dom'
/*-------*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
)

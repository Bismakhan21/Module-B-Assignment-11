import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/Home'
import {Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import Buttons from '../pages/Home/Button'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Home />} />
         <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} /> 
      </Route>
    )
  )

function Router_App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default Router_App
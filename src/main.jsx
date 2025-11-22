import { StrictMode } from 'react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from "./Layout.jsx";

import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      {/* <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} /> */}
      {/* <Route
      loader={githubInfoLoader}
      path='github' element={<Github/>} /> */}
      
    </Route>
  )
)

const root =createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

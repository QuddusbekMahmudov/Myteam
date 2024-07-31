import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFaund from './pages/PageNotFaund'
import Mainlayout from './layout/Mainlayout'


const App = () => {
  const roter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Mainlayout />}>

      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<PageNotFaund />}/>
      
      </Route>

    )
  )


  return (
  <RouterProvider router={roter}/>
  )
}

export default App

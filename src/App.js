
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Header from './components/home/Header'
import Footer from './components/Footer'
import MobileNavbar2 from './components/MobileNavbar2'
import { Route, Routes } from 'react-router-dom'
import Services from './pages/Services'

const App = () => {
  return (
   <>
   <Header/>
   <MobileNavbar2/>
   <Navbar/>
  <Routes>
   <Route path='/' element={<Home/>} ></Route>
   <Route path='/ourservice' element={<Services/>} ></Route>
  </Routes>
   <Footer/>
   
   </>
  )
}

export default App
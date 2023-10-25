import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ImageGenerationForm from './components/Generate'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <div className='container mt-3'>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/generate' element={<ImageGenerationForm/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
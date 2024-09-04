import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import CreateBlog from './CreateBlog'

function App() {
  const name = "Sayon"

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/createblog' element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseEffect from './components/UseEffect'


import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import CreateBlog from './pages/createBlog/CreateBlog'

function App() {
  const name = "Sayon"

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/use-effect' element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

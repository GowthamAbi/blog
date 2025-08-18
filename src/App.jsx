import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminPage from './pages/AdminPage'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/adminlogin' element={<AdminPage/>}/>
      </Routes>
    </>
  )
}

export default App

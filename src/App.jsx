import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminPage from './pages/AdminPage'
import { Dashboard } from './pages/Options/Dashboard'
import AddBlog from './pages/Options/AddBlog'
import BlogList from './pages/Options/BlogList'
import Comments from './pages/Options/Comments'




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/adminlogin' element={<AdminPage/>}/>
        <Route  path='/dashboard' element={<Dashboard/>}>
        <Route index path='addblogs' element={<AddBlog/>}/>
        <Route path='bloglist' element={<BlogList/>}/>
        <Route path='comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

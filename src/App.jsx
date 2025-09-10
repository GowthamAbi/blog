import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminPage from './pages/AdminPage'
import { Dashboard } from './pages/Options/Dashboard'
import Layout from './pages/Layout'
import AddBlogs from './pages/Options/AddBlogs'
import 'quill/dist/quill.snow.css'
import List from './pages/Options/List'
import CommentsList from './pages/Options/CommentsList'
import {Toaster }from 'react-hot-toast'



function App() {


  return (
    <><div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/get/:id' element={<Blog/>}/>
        <Route path='/adminlogin' element={<AdminPage/>}/>
        <Route path='/admin' element={true?<Layout/>:<AdminPage/>}>
        <Route index path='dashboard' element={<Dashboard/>}/>
        <Route  path='addblogs' element={<AddBlogs/>}/>
        <Route path='bloglist' element={<List/>}/>
        <Route path='comments' element={<CommentsList/>}/>
    
        
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App

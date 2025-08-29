import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminPage from './pages/AdminPage'
import { Dashboard } from './pages/Options/Dashboard'
import AddBlog from './pages/Options/AddBlog'
import BlogList from './pages/Options/BlogList'
import Comments from './pages/Options/Comments'
import Layout from './pages/Layout'
import AddBlogs from './pages/Options/AddBlogs'
import 'quill/dist/quill.snow.css'
import List from './pages/Options/List'
import CommentsList from './pages/Options/CommentsList'




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/adminlogin' element={<AdminPage/>}/>
        <Route path='/admin' element={true?<Layout/>:<AdminPage/>}>
        <Route index path='dashboard' element={<Dashboard/>}/>
        <Route  path='addblogs' element={<AddBlog/>}/>
        <Route path='bloglist' element={<BlogList/>}/>
        <Route path='comments' element={<Comments/>}/>
        <Route path='addblogss' element={<AddBlogs/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='commentslist' element={<CommentsList/>}/>
        
        </Route>
      </Routes>
    </>
  )
}

export default App

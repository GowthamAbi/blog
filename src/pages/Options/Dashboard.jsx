import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../../components/Sidebar'
import { assets,dashboard_data } from '../../assets/assets'
import TableData from '../../components/Data/TableData'
import { api } from '../../service/api'

export const Dashboard = () => {
  const [blog, setBlog] = useState([])
  const [comment,setComment]=useState([])

  const featchdashboard = async () => {
    try {
      const responces=await api.get('/admin/dashboard')

      setBlog(responces.data.blog)
      setComment(responces.data.comment)
      

    } catch (error) {
      
    }
  }

  useEffect(() => {
    featchdashboard()
  }, [])

 
  return (
    <div className="bg-blue-300/10 w-full px-8 pt-8 gap-6">
      {/* Stats Cards */}
      <div className="flex gap-6 flex-wrap">
        <div className="flex items-center gap-3 shadow-md rounded-md bg-white px-6 py-4 w-60">
          <img src={assets.dashboard_icon_1} className="w-10 h-10" alt="Blogs" />
          <div>
            <p className="text-lg font-semibold">{blog.length}</p>
            <h5 className="text-gray-600">Blogs</h5>
          </div>
        </div>

        <div className="flex items-center gap-3 shadow-md rounded-md bg-white px-6 py-4 w-60">
          <img src={assets.dashboard_icon_2} className="w-10 h-10" alt="Comments" />
          <div>
            <p className="text-lg font-semibold">{comment.length}</p>
            <h5 className="text-gray-600">Comments</h5>
          </div>
        </div>

        <div className="flex items-center gap-3 shadow-md rounded-md bg-white px-6 py-4 w-60">
          <img src={assets.dashboard_icon_3} className="w-10 h-10" alt="Drafts" />
          <div>
            <p className="text-lg font-semibold">Draft</p>
            <h5 className="text-gray-600">Drafts</h5>
          </div>
        </div>
      </div>

      {/* Latest Blogs Header */}
      <div className="flex items-center gap-2 py-6">
        <img src={assets.dashboard_icon_4} className="w-6 h-6" alt="Latest Blogs" />
        <h5 className="text-lg font-semibold">Latest Blogs</h5>
      </div>

      {/* Blogs Table */}
      <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white">
        <table className="w-full text-sm text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-3 text-left">#</th>
              <th scope="col" className="px-4 py-3 text-left">Blogs</th>
              <th scope="col" className="px-4 py-3 text-left max-sm:hidden">Date</th>
              <th scope="col" className="px-4 py-3 text-left max-sm:hidden">Status</th>
              <th scope="col" className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {blog.length > 0 ? (
              blog.map((blog, index) => (
                <TableData
                  key={blog._id}
                  blog={blog}
                  fetchblogs={featchdashboard}
                  index={index + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-400">
                  No blogs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

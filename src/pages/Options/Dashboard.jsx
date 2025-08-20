import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { assets } from '../../assets/assets'

export const Dashboard = () => {
  const [blog,setBlog]=useState(0)
  const [comment,setComment]=useState(0)
  const [draft,setDraft]=useState(0)
  return (
    <div className='bg-blue-300/10 w-full  px-8 pt-8 gap-4'>

      <div className='flex gap-2'>
        <div className='inline-flex shadow-sm items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_1} />
         <div>
          {blog}
          <h5>Blogs</h5>
          </div>       
        </div>

         <div className='inline-flex shadow-sm items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_2} />
         <div>
          {comment}
          <h5>Comment</h5>
          </div>       
        </div>

         <div className='inline-flex shadow-sm  items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_3} />
         <div>
          {draft}
          <h5>Drafts</h5>
          </div>       
        </div>
        </div>

        <div className='inline-flex py-6 px-2 gap-2'>
          <img src={assets.dashboard_icon_4} />
          <h5 className=''>Latest Blogs</h5>
        </div>

        <div className='bg-white text-gray-500 mx-8 flex justify-between w-2/4 '>
          <table className='table-auto border-collapse border-b-1 border-gray-500 py-4  w-full'>
          <thead className=' text-left py-4 '>
            <th className='p-4'>#</th>
            <th className='  '>	BLOG TITLE  </th>
            <th className=' '>DATE </th>
            <th className=' '>	STATUS  </th>
            <th className=''>ACTION </th>
          </thead>
          </table>
        </div>
    </div>
  )
}

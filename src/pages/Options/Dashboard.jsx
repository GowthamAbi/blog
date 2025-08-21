import React, { useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { div, tr } from 'motion/react-client'

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

          <div className='relative max-w-4xl overflow-auto shadow rounded-lg text-sm scorllbar-hidden bg-white '>
            <table className='w-full text-sm text-gray-600'>
              <thead className='text-sm text-gray-600 uppercase text-left'>
              <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
              <th scope='col' className='px-2 py-4'>Blogs</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>date</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>status</th>
              <th scope='col' className='px-2 py-4'>action</th>

              </tr>
            </thead>
            </table>
            
          </div>
    </div>
  )
}

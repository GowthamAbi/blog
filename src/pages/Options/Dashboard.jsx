import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../../components/Sidebar'
import { data, Outlet } from 'react-router-dom'
import { assets ,blog_data} from '../../assets/assets'
import { div, tr } from 'motion/react-client'
import TableData from '../../components/Data/TableData'

export const Dashboard = () => {

  const[dashboardData,setDashboardData]=useState({
    blog:0,
    comments:0,
    drafts:0,
    recentBlogs:[]
  })

  const featchdashboard=async()=>{
    setDashboardData(dashboardData)
  }

  useEffect(()=>{
    featchdashboard()
  },[])

  return (
    <div className='bg-blue-300/10 w-full  px-8 pt-8 gap-4'>

      <div className='flex gap-2'>
        <div className='inline-flex shadow-sm items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_1} />
         <div>
          {dashboardData.blog}
          <h5>Blogs</h5>
          </div>       
        </div>

         <div className='inline-flex shadow-sm items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_2} />
         <div>
          {dashboardData.comments}
          <h5>Comment</h5>
          </div>       
        </div>

         <div className='inline-flex shadow-sm  items-center text-center gap-2 py-4 rounded-sm bg-white w-50 px-4'>
          <img src={assets.dashboard_icon_3} />
         <div>
          {dashboardData.drafts}
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
                {}
            </table>
            
          </div>
    </div>
  )
}

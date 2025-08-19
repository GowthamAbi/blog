import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-500 min-w-full pt-6'>
     <NavLink end={true}  to='/admin' className={(isActive)=>`flex items-center gap-3 py-3.5 px-4 md:px-8 ${isActive&&'bg-primary/10 border-r-4 border-primary'} `}>
      <img src={assets.home_icon} className=' min-w-4 w-5'/>
      <h5 className='hidden md:inline-block'>Dashboard</h5>
     </NavLink>

     <NavLink to='/admin/addblogs' className={(isActive)=>`flex items-center gap-3 py-3.5 px-4 md:px-8 ${isActive&&'bg-primary/10 border-r-4 border-primary'} `}>
      <img src={assets.add_icon} className=' min-w-4 w-5'/>
      <h5 className='hidden md:inline-block'>Add Blogs</h5>
     </NavLink>
    </div>

    
  )
}
       
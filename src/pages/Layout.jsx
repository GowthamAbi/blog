import React from 'react'
import Navbar from './Navbar'
import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function() {
  return (
    <div>
        <div>
        <Navbar/>
        <div className='flex h-[calc(100vh-)]'>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
    </div>
  )
}

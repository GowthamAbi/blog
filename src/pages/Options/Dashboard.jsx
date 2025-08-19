import React from 'react'
import Navbar from '../Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
        {Outlet}
        </div>
    </div>
  )
}

import React from 'react'
import { assets } from '../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='mx-4'>
        <div className=' flex justify-between items-center py-5 mx-8 cursor-pointer '>
            <img onClick={()=>navigate('/')}  src={assets.logo} className='max-md:w-40 max-w-sm w-40' alt=""/>
            <button onClick={()=>navigate('/adminlogin')} className='bg-primary text-white  rounded-lg  py-2 px-8'>logout</button>
           
        </div>
       

    </div>
      
    </>
  )
}

export default Navbar
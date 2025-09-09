import React from 'react'
import { assets } from '../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

const Navbar = () => {
  const navigate=useNavigate()

  const logout=()=>{

  // Remove token
  localStorage.removeItem('token');

  // Redirect to login
  navigate('/adminlogin');
  }
  

  return (
    <>
    <div className='mx-4 border-b border-gray-200 '> 
        <div className=' flex justify-between items-center py-5 mx-8 cursor-pointer '>
            <img onClick={()=>navigate('/')}  src={assets.logo} className='max-md:w-40 max-w-sm w-40 cursor-pointer' alt=""/>
            <button onClick={logout} className='bg-primary text-white  rounded-lg  py-2 px-8'>logout</button>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
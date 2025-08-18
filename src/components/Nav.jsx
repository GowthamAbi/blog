import React from 'react'
import{assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate=useNavigate()
  return (
    <>
   <nav className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 '>
    <img onClick={()=>{navigate('/')}} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer'/>
    <button onClick={()=>{navigate('/adminlogin')}} className='flex items-center text-white px-10 py-2.5 gap-2 rounded-full text-dm cursor-pointer bg-primary sm:mx-20 xl:mx-32' >Login
       <img src={assets.arrow} alt="arrow"  className='w-3 '/></button>

   </nav>
    </>
  )

}

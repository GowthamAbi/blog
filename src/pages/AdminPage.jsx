import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAppContext} from '../context/AppContext.jsx'
import toast from 'react-hot-toast'

function AdminPage() {

  const{axios,setToken}=useAppContext()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const handleSubmit=async(e)=>{
     e.preventDefault()
    try {

      const{data}=await axios.post('/',{email,password})

      if(data) {
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common['Authorization']=data.token
      }
     else{
      toast.error.message
     }
    } catch (error) {
      
      toast.error(error.message)
    }
  }

  const navigate=useNavigate()
  return (
    <>
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div >
            <h1 className='font-bold text-2xl text-center '><span className='text-primary font-bold text-2xl'>Admin</span> Login</h1>
      <h5 className='text-center'>Enter your credentials to access the admin panel</h5>
      <form className='flex flex-col py-8 leading-10 ' onSubmit={handleSubmit}>
        <label >Email</label>
        <input type="email" className='focus:outline-none focus:border-none focus:ring-0 border-b-2 border-primary/15' placeholder='Enter Mail' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label >Password</label>
        <input type="text" placeholder='Enter Password' className='focus:outline-none  focus:ring-0 border-b-2 border-primary/15' onChange={(e)=>{setPassword(e.target.value)}}/>
      </form>
      <div className='flex items-center justify-center w-full bg-primary p-2 rounded-sm
       text-white text-sm cursor-pointer' onClick={()=>navigate('/admin/dashboard')}>
      <button  className='cursor-pointer'  >Login</button>
      </div>
        </div>
      </div>
      {console.log(email,password)}
    </div>
    
    </>
  )
}

export default AdminPage
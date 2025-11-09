import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAppContext} from '../context/AppContext.jsx'
import toast from 'react-hot-toast'
import { api } from '../service/api.js'

function AdminPage() {

  const{axios,setToken}=useAppContext()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
     console.log("handle Submit Enter")
    try {
    
      const responces=await api.post('/adminlogin',{email,password})
        
       console.log("Api Next",responces)
      if(responces.data) {
        setToken(responces.data.token)
        localStorage.setItem('token',responces.data.token)
      
        api.defaults.headers.common['Authorization'] = responces.data.token;

        console.log("Login Successfully")

        navigate('/admin/dashboard')
      }
     else{
      console.log("Loing Error")
     }
    } catch (error) {
      
 
      toast.error("Enter Vaild Id or Password")
    }
  }
  

 return (
    <>
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div >
            <h1 className='font-bold text-2xl text-center '><span className='text-primary font-bold text-2xl'>Admin</span> Login</h1>
      <h5 className='text-center'>Enter your credentials to access the admin panel</h5>
      <form className='flex flex-col py-8 leading-10 ' onSubmit={handleSubmit}>
        <label >Email</label>
        <input  type="email" className='focus:outline-none focus:border-none focus:ring-0 border-b-2 border-primary/15' placeholder='admin@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label >Password</label>
        <input  type="password" placeholder='123456' className='focus:outline-none  focus:ring-0 border-b-2 border-primary/15' onChange={(e)=>{setPassword(e.target.value)}}/>
      
      
      <button type='submit'  className=' flex items-center justify-center w-full bg-primary p-2 rounded-sm
       text-white text-sm cursor-pointer' >Login</button>
     
      </form>
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}

export default AdminPage
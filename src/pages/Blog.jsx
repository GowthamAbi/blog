import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import { div, h1 } from 'motion/react-client'
import Navbar from './Navbar'
import moment from 'moment';
import { Footer } from '../components/Footer'
import Loader from '../components/Loader'
import { api } from '../service/api'


function Blog() {
  const {id}=useParams()
  const [data,setData]=useState(null)
  const[comment,setComment]=useState('')
  const[name,setName]=useState('')
  const [commented,setCommented]=useState(false)

  const fatchData=async()=>{
    const data=blog_data.find(item=>item._id===id)

    setData(data)
  }

const handleSubmit=async(e)=>{
    e.preventDefault()
    setCommented(true)
  try {
    const responces=await api.post(`/comments/${id}`,{name,comment})
    console.log(responces.data)
  } catch (error) {
    console.log("Error in Comments")
  }
}

  useEffect(()=>{
    fatchData()
  },[])

  return ( 

    data?<div>

        <Navbar/>
        
        <div className='relative'>
          <img src={assets.gradientBackground} className='absolute -top-60 opacity-50  ' />
          <div className='text-center mt-8 leading-10'>
            <h5 className='text-primary font-bold  text-lg'>Published on {moment(`${data.createdAt}`).format('MMMM Do YYYY')}</h5>
            <h1 className='lg:text-5xl max-w-2xl mx-auto md:text-2xl font-bold p-2 '  >{data.title}</h1>
            <p dangerouslySetInnerHTML={{"__html":data.subTitle}} className='text-gray-500  '></p>
            <p className='bg-primary/20 border text-primary font-bold max-w-40 rounded-full mx-auto '>Gowtham</p>
          </div>
        </div>

        <div>
          <img src={data.image} className='rounded-2xl mx-auto lg:max-w-4xl sm:max-w-2xl mt-20' />
          <p dangerouslySetInnerHTML={{__html:data.description}} className='rich-text mx-auto lg:max-w-4xl sm:max-w-2xl '></p>
          
        </div>

        <div>
          <div className='mx-auto lg:max-w-4xl sm:max-w-2xl mt-14 mb-10'>
            <p className='-'>Comments( {comments_data.length} )</p>
            <div className='flex flex-col gap-4  '>
              
              {
                comments_data.map((item,index)=>(
                  <div key={index} className='relative  bg-primary/2 border border-primary/5 max-w-sm p-4 text-gray-600'>
                    <div className='flex items-center gap-2 mb-2'>
                      <img src={assets.user_icon} className='w-6'/>
                      <h1>{item.name}</h1>
                      
                    </div>
                    <p className='text-sm max-w-md ml-8'>{item.content}</p>
                    <p className='text-end'> {moment(item.createdAt).fromNow()}</p>
                    </div>
                ))
              }
            </div>
            </div>
        </div>

        <div className='mx-auto lg:max-w-4xl sm:max-w-2xl  flex flex-col gap-6 '>
          <h1 className='font-bold text-lg'>Add Comments</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6   '>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Name' className='border-1 border-gray-300 rounded px-2 py-4 focus:outline-none  focus:ring-0 lg:max-w-lg sm:max-w-lg'/>
            <textarea type="text"  onChange={(e)=>setComment(e.target.value)} placeholder='Your Comments' className='pb-14 border-gray-300 pt-4 px-2 border-1 rounded focus:outline-none  focus:ring-0 lg:max-w-lg sm:max-w-lg'/>
            <button disabled={commented} className=' bg-primary w-30  px-4 py-2 rounded-sm text-white text-lg'>{commented?"Commented":"Submit"}</button> 
          </form>
        

        </div>

        <div className='mx-auto lg:max-w-4xl sm:max-w-2xl mt-20'>
          <p>Share this article on social media</p>
          <div className='inline-flex gap-2 mt-4' >
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.googleplus_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
      
      <Footer/>
  </div>:<Loader/>
  )
}

export default Blog
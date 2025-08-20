import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets'
import { div, h1 } from 'motion/react-client'
import Navbar from './Navbar'
import moment from 'moment';

function Blog() {
  const {id}=useParams()
  const [data,setData]=useState(null)

  const fatchData=async()=>{
    const data=blog_data.find(item=>item._id===id)

    setData(data)
  }

  useEffect(()=>{
    fatchData()
  },[])

  return data?<div>
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
  </div>:<h1>Loading.....</h1>
}

export default Blog
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets'
import { div, h1 } from 'motion/react-client'
import Navbar from './Navbar'

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
<div></div>
<div></div>
  </div>:<h1>Loading.....</h1>
}

export default Blog
import React, { useEffect, useState } from 'react'
import TableData from '../../components/Data/TableData'
import { assets } from '../../assets/assets'
import { tr } from 'motion/react-client'

export default function BlogList() {

  const[data,setData]=useState('')
const fetchBlogs=async()=>{
  setData(assets.blog_data)
}

useEffect(()=>{
  fetchBlogs()
},[])

  return (
    <div className='bg-blue-300/10 w-full'>
      <div className='mt-12 ml-12 '>
        <h1>All blogs</h1>
        <div className='bg-white max-w-2xl  mt-4 rounded-tl-lg shadow border-b border-gray-500 scroll-auto '>
          <table className='w-full'>
            <thead className='uppercase'>
              <tr >
                <td scope='col' className='px-2 py-4'>#</td>
                <td scope='col'  className='px-2 py-4'>Blog Title</td>
                <td scope='col' className='px-2 py-4'>Date</td>
                <td scope='col' className='px-2 py-4'>Status</td>
                <td scope='col' className='px-2 py-4'>Action</td>
              </tr>
            </thead>
            <tbody>

              {
                data.map((blog,index)=>{
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.title}</td>
                  </tr>

                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

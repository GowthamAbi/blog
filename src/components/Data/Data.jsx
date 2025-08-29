import React from 'react'

export default function Data({blog,fetchData,index}) {
  return (
   
        <tr className='border-b border-gray-300 text-gray-500 '>
          <td className='px-2 py-2'>{index}</td>
          <td className='px-2 py-2'>{blog.title}</td>
          <td className='px-2 py-2 max-sm:hidden'>{new Date(blog.createdAt).toLocaleDateString()}</td>
          <td className='px-2 py-2'>{blog.isPublished==true?"Published":"UnPublished"}</td>
          <td><h5  >{blog.isPublished==true?"UnPublished":"Published"}</h5></td>
        </tr>

  )
}

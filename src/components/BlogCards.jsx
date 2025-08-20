import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BlogCards = ({blog}) => {
    const{image,title,description,category,_id}=blog
    const navigate=useNavigate()
  return (
    <div>
        <div onClick={()=>navigate(`/blog/${_id}`)} className='w-full h-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
            <img src={image} className='aspect-video'/>
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
            <div className='p-5'>
            <h5 className='font-medium mb-2 text-gray-900'>{title}</h5>
            <p className='text-gray-600 text-xs mb-3' dangerouslySetInnerHTML={{"__html":description.slice(0,80)}}></p>
            </div>
        </div>
        
    </div>
  )
}

import { clamp, motion, spring } from 'motion/react'
import { div, text } from 'motion/react-client'
import React, { useContext, useEffect, useState } from 'react'
import { BlogCards } from './BlogCards'
import { useAppContext } from '../context/AppContext'

export const BlogList = () => {

    const list=['All', 'Technology', 'Startup', 'Lifestyle', 'Finance']

    const[menu,setMenu]=useState('All')

    const{blogs}=useAppContext()
    console.log("blogs are:",blogs)

  return (
        <>
        
        <div className='flex justify-center gap-2 my-6 sm:my-8 max-w-2xl m-auto max-sm:text-s flex-wrap relative' >
            {blogs.map((item,index)=>(
                <div key={index} className='relative'>
                <button  onClick={()=>{setMenu(item.category)}} className={` text-gray-500
                  cursor-pointer ${menu===item.category && 'text-white px-4 pt-0.5'}`}>
                    {item.category}
                    {
                         menu===item.category&&(<motion.div layoutId='underline' 
                        transition={{type:'spring',stiffness:500,damping:30}}
                         className='bg-primary absolute left-0 right-0 top-0 h-7 -z-1 rounded-full'>
                        </motion.div>)
                    }
                    </button>
                    <h1>{console.log(item.category)}</h1>
                    </div>))}
        </div>
        <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40 '>
          {blogs.filter((blog)=>menu==="All"?true:blog.category===menu).map((blog)=><BlogCards key={blog._id} blog={blog}/>)}
        </div>
        
        </>
  )
}

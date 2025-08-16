import { clamp, motion, spring } from 'motion/react'
import { div, text } from 'motion/react-client'
import React, { useState } from 'react'

export const List = () => {

    const list=["All","Technology","Startup","LifeStyle","Finace"]
    const[menu,setMenu]=useState("All")
  return (
        <>
        <div className='flex justify-center gap-2 my-6 sm:my-8 max-w-2xl m-auto max-sm:text-s flex-wrap relative' >
            {list.map((item,index)=>(
                <div key={index} className='relative'>
                <button  onClick={()=>{setMenu(item)}} className={` text-gray-500
                  cursor-pointer ${menu===item && 'text-white px-4 pt-0.5'}`}>
                    {item}
                    {
                         menu===item&&(<motion.div layoutId='underline' 
                        transition={{type:'spring',stiffness:500,damping:30}}
                         className='bg-primary absolute left-0 right-0 top-0 h-7 -z-1 rounded-full'>
                        </motion.div>)
                    }</button>
                    </div>))}
        </div>
        </>
  )
}

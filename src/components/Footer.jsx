import React from 'react'
import { assets,footer_data } from '../assets/assets'
import { div, h1, li } from 'motion/react-client'

export const Footer = () => {
  return (
    <div className='bg-gray-200 mt-60 p-4'>
        <div className='mx-8 sm:mx-20 xl:mx-32 flex justify-between'>
            <div className=' '>
                <img src={assets.logo} />
                <p className='text-gray-500 max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat
                     quibusdam ad enim necessitatibus impedit amet, officiis, nesciunt,
                    tenetur distinctio vel?
                     Architecto rerum minus nihil ipsum sit velit nam. Exercitationem?</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] '>
                    {footer_data.map((item,index)=>(
                        <div key={index} className=' w-40 '>
                        <h3 className='mb-8 font-semibold'>{item.title}</h3>
                        <ul>
                          {item.links.map((link,i)=>(
                            <li key={i} className='text-gray-500'><a href="#">{link}</a></li>
                          ))}
                        </ul>
                        </div>
                    ))}
            </div>
            
            </div>
            <div className='mx-8 sm:mx-20 xl:mx-32 mt-8 text-gray-500 text-center '>
              <hr  />
              <p className='pt-4'>Copyright 2025 © QuickBlog GreatStack - All Right Reserved.</p>
            </div>
        
    </div>
  )
}

import React from 'react'
import { assets,footer_data } from '../assets/assets'
import { div, h1 } from 'motion/react-client'

export const Footer = () => {
  return (
    <div className='bg-gray-200 mt-60 p-4'>
        <div className='mx-8 sm:mx-20 xl:mx-32 flex justify-between'>
            <div className='w-60'>
                <img src={assets.logo} />
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat
                     quibusdam ad enim necessitatibus impedit amet, officiis, nesciunt,
                    tenetur distinctio vel?
                     Architecto rerum minus nihil ipsum sit velit nam. Exercitationem?</p>
            </div>
            <div className='flex justify-between '>
                    {footer_data.map((item,index)=>(
                        <div key={index} className='w-40 flex-wrap'>
                        <h1>{item.title}</h1>
                        <h1>{item.links}</h1>
                        </div>
                    ))}
            </div>
            </div>
        
    </div>
  )
}

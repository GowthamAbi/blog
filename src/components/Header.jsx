import React from 'react'
import { assets } from '../assets/assets'


export const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 mt-8 relative'> 
        <div className='text-center'> 
            <div className=' inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-primary/44 bg-primary/40 rounded-full text-primary text-sm '>
                <p>New:Ai feature integrated </p>
                <img src={assets.star_icon} alt="star" />
            </div>
            <div>

                <h1 className='text-3xl font-semibold w-auto sm:text-6xl sm:leading-16 '>
                    My Own <span className='text-primary'>Blogging </span> <br/> platfrom. 
                </h1>
                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>This is your space to think out loud, to share what matters, and to write without filters. Whether it’s one word or a thousand, your story starts right here.</p>
            <form className='flex justify-between border border-gray-400 bg-white rounded overflow-hidden mx-auto max-w-lg max-sm:scale-75'>
                <input type="text" className='w-full pl-4' placeholder='Search for blogs'/>
                <button className='bg-primary  px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
            </form>
            </div>
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-40 -z-1 opacity-50 '/>
       
       
    </div>
  )
}

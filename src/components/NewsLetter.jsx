import React from 'react'

export const NewsLetter = () => {
  return (
    <div>
        <div className='flex-col justify-center  text-center '>
            <h1 className='font-bold text-4xl pb-2'>Never Miss a Blog!</h1>
            <h5 className='text-gray-500'>Subscribe to get the latest blog, new tech, and exclusive news.</h5>
            <form className='flex border border-gray-400 mx-auto max-w-lg bg-white overflow-hidden max-sm:scale-75 h-12  rounded-sm mt-8  ' >
                <input type="text" placeholder='Enter Your Email' className='w-full pl-2' />
                <button className='bg-primary text-white text-sm p-2 rounded-esm'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

import React from 'react'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='mx-4'>
        <div className=' flex justify-between items-center py-5 mx-8 '>
            <img src={assets.logo} className='max-md:w-40 max-w-sm w-40' alt=""/>
            <button className='bg-primary text-white  rounded-lg  py-2 px-8'>login</button>
        </div>
    </div>
  )
}

export default Dashboard
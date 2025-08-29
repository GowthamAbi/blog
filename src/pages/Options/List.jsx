import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import { div } from 'motion/react-client'
import Data from '../../components/Data/Data'

export default function List() {

    const[data,setData]=useState([])

    const fetchData=async()=>{
        setData(blog_data)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='bg-blue-400/10 w-full  h-screen '>
        <div>
            <h5 className=' text-center py-8 text-2xl font-bold  '>Blog List</h5>
            <div className= 'overflow-scroll  bg-white h-auto max-w-2xl lg:mx-auto md:mx-auto  rounded-t-2xl '>
                <table className='w-full' >
                    <thead className='uppercase bg-gray-500 '>
                        <tr>
                            <td scope='col' className='px-2 py-2' >#</td>
                            <td scope='col' className='px-2 py-2' >Blog Title</td>
                            <td scope='col' className='px-2 py-2 max-sm:hidden' >date</td>
                            <td scope='col' className='px-2 py-2' >status</td>
                            <td scope='col' className='px-2 py-2' >action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((blog,index)=>{
                          return <Data key={blog._id} blog={blog} fetchData={fetchData} index={index+1} />
                        })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}

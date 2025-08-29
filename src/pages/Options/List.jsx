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
    <div className='bg-blue-400/10 w-full h-250 '>
        <div>
            <h5>Blog List</h5>
            <div className='bg-white max-w-xl h-screen lg:mx-auto md:mx-auto mx-2 '>
                <table className='w-full' >
                    <thead className='uppercase'>
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

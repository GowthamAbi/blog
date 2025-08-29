import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentsData from '../../components/Data/CommentsData'

export default function CommentsList() {

const [data,setData]=useState([])

const fetchData=async()=>{
  setData(comments_data)

}

useEffect(()=>{
  fetchData()
},[])
  return (
    <div className='bg-blue-300/10 w-full px-4 py-4'>
      <h5 className=' text-center py-4 font-bold text-xl'> Comments List </h5>
      
      <div className='overflow-scroll bg-white h-auto max-w-2xl lg:mx-auto md:mx-auto rounded-t-2xl '>
        <table className='w-full '>

          <thead className='uppercase bg-gray-500'>
            <tr >
              <td scope='col' className='px-2 py-2 border-b border-gray-300'> #</td>
               <td scope='col' className='px-2 py-2 border-b border-gray-300'>Blog Title & Comment</td>
                <td scope='col' className='px-2 py-2 border-b border-gray-300'> date</td>
                 <td scope='col' className='px-2 py-2 border-b border-gray-300'> status</td>
                  <td scope='col' className='px-2 py-2 border-b border-gray-300'> action</td>
            </tr>
          </thead>

          <tbody>
            {data.map((comment,index)=>{
             return <CommentsData key={comment._id} fetchData={fetchData} comment={comment} index={index+1}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

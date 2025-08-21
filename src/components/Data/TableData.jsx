import React from 'react'
import { assets } from '../../assets/assets'

export default function TableData({blog,fetchblogs,index}) {
  const[title,createAt]=blog
const blogDate=new Date(createAt)



  return (
    <tr>
        <th>
          <td>{index}</td>
          <td>{title}</td>
          <td>{blogDate.toDateString()}</td>
          <td>
            <p>{blog.isPublished?"Published":"UnPublished"}</p>
          </td>
          <td>
            <p>{blog.isPublished?"UnPublished":"Published"}</p>
            <img src={assets.cross_icon} />
          </td>
        </th>
    </tr>
  )
}
  

export default function CommentsData({comment,index,fetchData}) {
  return (
    <tr className="border-b border-gray-300" >
        <td scope="col" className="px-2 py-2">{index}</td>
        <td className="px-2 py-2">{comment.name}</td>
        <td className="px-2 py-2">{new Date(comment.createdAt).toDateString()}</td>
        <td className="px-2 py-2">{comment.isApproved==true?"Approved":"Not Approved"}</td>
        <td className="px-2 py-2">{comment.isApproved==true?"Not Approved":"Approved"}</td>
        

    </tr>
  )
}

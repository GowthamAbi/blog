import React from 'react'

export default function List() {
  return (
    <div className='bg-blue-400/10 w-full h-250 '>
        <div>
            <h5>Blog List</h5>
            <div className='bg-white max-w-xl h-screen mx-auto sm:w-3/4 lg:max-w-2xl border'>
                <table >
                    <thead className='uppercase'>
                        <tr>
                            <td>#</td>
                            <td>Blog Title</td>
                            <td>date</td>
                            <td>status</td>
                            <td>action</td>
                        </tr>
                    </thead>
                </table>

            </div>
        </div>
    </div>
  )
}

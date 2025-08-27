import { List } from 'lucide-react'
import { assets } from '../../assets/assets'
import Quill from 'quill'
import { useEffect, useRef } from 'react'

export default function AddBlogs() {

    const quillRef=useRef(null)
    const editRef=useRef()

useEffect(()=>{

  if(!quillRef.current&&editRef.current){
    quillRef.current=new Quill(editRef.current,{theme:'snow'})
  }
},[])
  return (

      <div className='bg-blue-300/10 w-full h-250' >
      <h5 className='text-2xl text-gray-500 text-center py-2'>Add Blog</h5>
      <form className='bg-white border border-gray-300 rounded-sm max-w-2xl md:mx-10 lg:mx-auto  sm:mx-4 mx-4 sm:w-auto px-6 py-6'>
        
        <div >
          <input type="file" id="fileinput" className='hidden' />
          <h5 className='py-4'>Upload thumbnail</h5>
         <label htmlFor="fileinput">
          <img src={assets.upload_area} alt="" className='cursor-pointer' />
        </label>
        </div>

        <div className=''>
            <h5 className='pt-2' >Blog title</h5>
            <input type="text" placeholder='Type Here'  className=' w-3/4 focus:outline-none border border-gray-300 rounded-sm my-4 p-2'/>
        </div>

        <div className=''>
            <h5 className='pt-2' >Sub title</h5>
            <input type="text" placeholder='Type Here'  className=' w-3/4 focus:outline-none border border-gray-300 rounded-sm my-4 p-2'/>
        </div>

        <div className='relative'>
            <h5 className='pt-2' >Blog Description</h5>
            <div  className='relative   w-3/4 h-74 pb-16  pt-2'>
           
            <div ref={editRef}></div>
           
           <button className=' absolute cursor-pointer hover:underline bg-black/70 font-bold text-white py-1.5 px-1.5 ml-2 rounded-sm bottom-1 right-2'>Generate AI</button>
            </div>
        </div>

      <div className=''>
            <h5 className='py-2' >Blog category</h5>
            <select name="" id="" className='cursor-pointer text-gray-500 focus:outline-none border border-gray-300 rounded-sm p-2'>
              <option value="" >Select Category</option>
              <option value="tech">Technology</option>
              <option value="startup">Startup</option>
              <option value="life">Lifestyle</option>
              <option value="finace">Finance</option>
            </select>
            
        </div>

        <div className='flex items-center gap-3 py-4'>
          <h5>Publish Now</h5>
          <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer' />
        </div>

        <button className='bg-primary text-white px-6 rounded-lg py-2 font-semibold cursor-pointer'>
          Submit
        </button>
      </form>


    </div>

  )
    
}


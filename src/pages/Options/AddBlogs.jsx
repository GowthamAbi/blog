import { List } from 'lucide-react'
import { assets } from '../../assets/assets'
import Quill from 'quill'
import { useEffect, useRef, useState } from 'react'
import { api } from '../../service/api'

export default function AddBlogs() {
const[image,setImage]=useState(null)
const[title,setTitle]=useState('')
const[subTitle,setSubTitle]=useState('')
const[description,setDescription]=useState('')
const[category,setCategory]=useState('')
const[isPublished,setIsPublished]=useState(false)
const[isAdding,setIsAdding]=useState(false)


    const quillRef=useRef(false)
    const editRef=useRef()

  const handleSubmit=async(e)=>{
       e.preventDefault()
       setIsAdding(true)
      try {
         const blog={ title,subTitle,description:quillRef.current.root.innerHTML,category,isPublished }
        
         const formData = new FormData();
         formData.append('blog',JSON.stringify(blog))

         formData.append("image", image)
        const {data}=await api.post('/blog/add',formData,{headers: { "Content-Type": "multipart/form-data" }})



        console.log(data)

      } catch (error) {
        console.log("Error in AddBlog")
      }
  }



useEffect(()=>{

  if(!quillRef.current&&editRef.current){
    quillRef.current=new Quill(editRef.current,{theme:'snow'})
  }
},[])
  return (

      <div className='bg-blue-300/10 w-full h-250' >
      <h5 className='text-2xl text-gray-500 text-center py-2'>Add Blog</h5>
      <form onSubmit={handleSubmit} className='bg-white border border-gray-300 rounded-sm max-w-2xl md:mx-10 lg:mx-auto  sm:mx-4 mx-4 sm:w-auto px-6 py-6'>
        
        <div >
        
          <h5 className='py-4'>Upload thumbnail</h5>
          <label htmlFor="image">
            <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='cursor-pointer mt-2 h-16 rounded' />
            <input type="file" id="image" hidden required onChange={(e) => setImage(e.target.files[0])} />
          </label>

        </div>

        <div className=''>
            <h5 className='pt-2' >Blog title</h5>
            <input type="text" placeholder='Type Here'  className=' w-3/4 focus:outline-none border border-gray-300 rounded-sm my-4 p-2'  onChange={(e)=>setTitle(e.target.value)}/>
        </div>

        <div className=''>
            <h5 className='pt-2' >Sub title</h5>
            <input type="text" placeholder='Type Here'  className=' w-3/4 focus:outline-none border border-gray-300 rounded-sm my-4 p-2'  onChange={(e)=>setSubTitle(e.target.value)}/>
        </div>

        <div className='relative'>
            <h5 className='pt-2' >Blog Description</h5>
            <div  className='relative   w-3/4 h-74 pb-16  pt-2'>
           
            <div ref={editRef}  onChange={(e)=>setDescription(e.target.value)} ></div>
           
           <button className=' absolute cursor-pointer hover:underline bg-black/70 font-bold text-white py-1.5 px-1.5 ml-2 rounded-sm bottom-1 right-2'>Generate AI</button>
            </div>
        </div>

      <div className=''>
            <h5 className='py-2' >Blog category</h5>
            <select name="" id="" className='cursor-pointer text-gray-500 focus:outline-none border border-gray-300 rounded-sm p-2'  onChange={(e)=>setCategory(e.target.value)}>
              <option value="" >Select Category</option>
              <option value="tech">Technology</option>
              <option value="startup">Startup</option>
              <option value="life">Lifestyle</option>
              <option value="finace">Finance</option>
            </select>
            
        </div>

        <div className='flex items-center gap-3 py-4'>
          <h5>Publish Now</h5>
          <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer'  onChange={(e)=>setIsPublished(e.target.checked)}/>
        </div>

        <button disabled={isAdding} className='bg-primary text-white px-6 rounded-lg py-2 font-semibold cursor-pointer'>
         {isAdding?"Adding...":"Add Blog"}
        </button>
      </form>


    </div>

  )
    
}


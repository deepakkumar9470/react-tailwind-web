import React,{useState} from 'react'

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
     
    const [open , setOpen] = useState(false)

    const handleNav =  () =>{
        setOpen(!open)
    }

  return (
    <div className='flex justify-between items-center text-white  h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-[#14C38E] font-bold text-3xl'>REACT WEB</h1>


         <ul className='md:flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul> 


        <div onClick={handleNav} className='block md:hidden'>
             {
                open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>  
             }          
          
        </div>

         <div className={open ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#1B2430] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className=' uppercase p-4 '>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Projects</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div> 

        

    </div>
  )
}

export default Navbar
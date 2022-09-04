import React from 'react'

import {FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1240px] py-16 mx-auto px-3 grid lg:grid-cols-3 gap-8 text-gray-300'>
       <div>
       <h1 className='w-full text-[#14C38E] font-bold text-3xl'>REACT WEB</h1>
       <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero iure tenetur quia modi sunt ullam corporis reiciendis</p>
         
         <div className='flex md-w-[75%] justify-between my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaTwitterSquare size={30}/>
         </div>
       </div>

       <div className='lg:col-span-2 mt-5 flex justify-around'>
          <div>
             <h6 className='font-medium text-gray-400'>Solutions</h6>
             <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketings</li>
                <li className='py-2 text-sm'>Digital</li>
                <li className='py-2 text-sm'>Buisness</li>
             </ul>
          </div>
          <div>
             <h6 className='font-medium text-gray-400'>Outstanding</h6>
             <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketings</li>
                <li className='py-2 text-sm'>Digital</li>
                <li className='py-2 text-sm'>Buisness</li>
             </ul>
          </div>
          <div>
             <h6 className='font-medium text-gray-400'>Services</h6>
             <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketings</li>
                <li className='py-2 text-sm'>Digital</li>
                <li className='py-2 text-sm'>Buisness</li>
             </ul>
          </div>
          
       </div>
    </div>
  )
}

export default Footer
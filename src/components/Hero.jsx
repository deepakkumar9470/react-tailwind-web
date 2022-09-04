import React from 'react'
import Typed from 'react-typed';
 
const Hero = () => {
  return (
    <div className='text-white  mt-6'>
        <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-column'>
            <p className='text-[#4E9F3D] p-2'>GROW YOUR BUISNESS</p>
           <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold'>Grow with data</h1>

            <div className='flex justify-center items-center flex-col'>
            <p className='md:text-5xl sm:text-5xl text-xl font-bold'>Fast, Flexible , Scalable</p>
            <Typed
            className='md:text-5xl sm:text-5xl text-xl font-bold pl-2'
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop >
                   
                </Typed>
            </div>
            <p className='md:text-2xl  text-xl font-bold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, accusantium.</p>

            <button className='bg-[#D9F8C4] w-[200px] font-medium text-black rounded-md my-6 mx-auto py-3'>Explore More</button>
        
        </div>

    </div>
  )
}

export default Hero
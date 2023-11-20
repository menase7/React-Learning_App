import React from 'react'
import img from './images/about.png'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <motion.div id='About' className='grid lg:grid-cols-2'>
      <motion.div
         initial={{ translateX: -300 }}
         animate={{ translateX: 0 }}
         transition={{ duration: 1 }}
        className="about-left">
        <div className='p-12'>
         <img src={img} alt="about image" />
        </div> 
      </motion.div>
      <motion.div
        initial={{ translateX: 300 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1 }}
        className="about-right flex flex-col m-5 gap-10 pt-8">
        <div className='flex flex-col gap-2'>
        <p className='font-bold text-violet-600'>ABOUT US</p>
        <p className='text-[35px] font-bold w-72'>About <span className='text-violet-600 font-bold'>"EWEKET"</span> Technologies </p>
        <div className='bg-violet-600 h-[3px] w-14'></div>
        </div>
        <p className='text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni, modi quam temporibus dolores deleniti quisquam dolorum, 
          delectus laboriosam est enim error ab ratione, 
          velit quaerat voluptates amet repellendus adipisci accusantium!
        </p>
        <div className='grid md:grid-cols-3 gap-1 justify-center gap-6'>
          <div className='circle flex flex-col justify-center border-[5px] border-green-700 text-center rounded-full h-36 w-36'>
            <p className='text-4xl font-bold'>1250</p>
            <p  className='text-xl text-gray-400'>Readers</p>
          </div>
          <div className='circle flex flex-col justify-center border-[5px] border-violet-500 text-center rounded-full h-36 w-36'>
              <p className='text-4xl font-bold'>720</p>
              <p>Authors</p>
          </div>
          <div className='circle flex flex-col justify-center border-[5px] border-orange-500 text-center rounded-full h-36 w-36'>
              <p className='text-4xl font-bold'>8000</p>
              <p>Students</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About

import React from 'react'
import Img from './images/slider.png'
import Img1 from './images/slider-left-dec.jpg'
import Img2 from './images/slider-right-dec.jpg'
import { motion } from 'framer-motion'


const Main = () => {
  return (
    <motion.div id='Main'
      className='w-full grid md:grid-cols-2 h-full mt-48'>
      <motion.div 
        initial={{ translateX: -300 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1 }} 

        style={{backgroundImage: `URL(${Img1}), URL(${Img2})`, backgroundPositionY: 'center' ,backgroundRepeat: 'no-repeat'}}

        className="main-left items-center max-md:text-center justify-center gap-8 flex flex-col">
        <p className='text-lg item max-md:text-center w-full font-bold text-violet-800 flex max-md:justify-center px-10'>EWKET TECHNOLOGIES</p>
        <p className='text-6xl w-70 flex-wrap font-bold px-10'>
          creating a generation of readers
          </p>
        <p className='text-gray-400 w-70 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Illo iure nesciunt omnis quis voluptatibus, sed id iste dignissimos exercitationem, 
          distinctio placeat delectus doloribus sit blanditiis labore officiis quas recusandae eos?</p>
        <button className='text-blue-500 w-36 mx-10 border-2 border-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white duration-300'><a href='./Contact.jsx'>Contact Us</a></button>
      </motion.div>
      <motion.div
      initial={{ translateX: 300 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 1 }} 

      style={{backgroundImage: `URL(${Img2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '150%'}}

       className="main-right p-12">
        <img src={Img} alt="img" />
      </motion.div>
    </motion.div>
  )
}

export default Main

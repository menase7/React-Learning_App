import React from 'react'
import kids2 from '../images/blog/kids2.jpg'
import { motion } from 'framer-motion'

const Blog5 = () => {
  return (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }} 
        className='blogs-buttom grid lg:grid-cols-2 lg:m-14 m-6 text-white rounded-[40px] bg-[#db7093] h-[60%]'>
        <div className="bt-left flex flex-col gap-10  p-14">
          <p className='text-center'>Enjoy & Travel</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi tempore qui tenetur distinctio aperiam praesentium excepturi dolore. 
            Labore eius iusto laboriosam odio tenetur aut, 
            possimus dignissimos harum sunt molestias laborum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Non soluta tempora molestias 
            delectus voluptas suscipit sint debitis magni. 
            Dolores ipsam eaque fugiat et cupiditate vel temporibus sit 
            officiis perferendis perspiciatis.
          </p>
        </div>
        <div className="bt-right lg:py-14 lg:pr-16 flex flex-col justify-center m-5">
          <img className='rounded-[5%]' src={kids2} alt="kids2" />
        </div>
      </motion.div>
  )
}

export default Blog5

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
  

const Card = (props) => {
  return (
    <div className="flex-shrink-0 h-fit w-fit card shadow-xl flex flex-col gap-3 items-center justify-center rounded-2xl">
        <img className='w-[300px] z-0 h-[350px] rounded-t-2xl' src={props.img} alt="" />
        <p className='font-bold text-2xl'>{props.text} </p>
        <p className='mb-5 font-medium text-gray-400'>{props.name} </p>
    </div>
  )
}

export default Card

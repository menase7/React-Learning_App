import React from 'react'
import challenge from './images/drawing/drawing2.jpeg'
import challenge2 from './images/drawing/drawing2.jpeg'
import lion from './images/drawing/drawing.jpg'
import draw2 from './images/drawing/drawing1.avif'
import draw3 from './images/drawing/drawing3.webp'
import img from './images/slider-left-dec.jpg'

const Challenges = () => {
  return (
    <div id='Challenges' style={{backgroundImage: `URL(${img})`, backgroundSize: '500px', backgroundRepeat: 'no-repeat'}}>
      <div className="top m-14 flex flex-col gap-2 text-center">
        <p className='font-bold text-violet-500'>RECENT CHALLENGES</p>
        <p className='text-4xl font-bold'>Check Our</p>
        <p className='font-bold text-4xl text-violet-500'>Challenges</p>
        <div className='flex flex-col items-center mt-5'>
        <div className='w-[50px] h-[2px] bg-violet-500'></div>
        </div>
      </div>
      <div className="main grid lg:grid-cols-2 gap-5 m-10">
        <div className="challenge bg-white left shadow-xl flex flex-col gap-2 h-fit">
          <img className='rounded-t-[5%]' src={challenge} alt="" />
          <div className='top flex justify-between p-5'>
            <p className='bg-violet-500 text-white px-3 p-2 rounded-full'>New Drawing Challenge</p>
            <p className='text-gray-400'>Deadline: 03 Augest 2023</p>
          </div>
          <div className='middle flex flex-col gap-4 px-5'>
            <p className='text-xl font-bold'>
              petros Ashenafi's car drawing challenge
            </p>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, nemo. 
              Culpa sapiente atque molestias.
            </p>
          </div>
          <div className='buttom flex justify-between px-6 my-6'>
            <div className="b-left flex gap-5 items-center w-14">
              <img className='rounded-full' src={challenge2} alt="cat" />
              <p className='text-[15px]'>Submit</p>
            </div>
            <button className='border-blue-500 text-blue-500 border rounded-full h-10 px-5 hover:bg-blue-500 hover:text-white duration-300'>
              Telegram
            </button>
          </div>
        </div>
        <div className="right flex flex-col gap-16">
          <div className="card flex flex-col items-center">
            <div className="img  w-[350px] rounded-[20%]">
            <img className='rounded-[5%]' src={lion} alt="lion" />
            </div>
            <div className='flex flex-col gap-4 pl-10'>
             <p className='bg-green-600 text-white p-2 rounded-full px-3 w-36'>1st Rank Winner</p>
             <p className='font-bold text-xl'>Abel Ketema</p>
             <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </p>
            </div>
          </div>

          <div className="card flex flex-col items-center">
            <div className="img  w-[350px] rounded-[20%]">
            <img className='rounded-[5%]' src={draw2} alt="lion" />
            </div>
            <div className='flex flex-col gap-4 pl-10'>
             <p className='bg-yellow-300 text-black p-2 rounded-full px-3 w-40'>2nd Rank Winner</p>
             <p className='font-bold text-xl'>Bethelhem Zeleke</p>
             <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </p>
            </div>
          </div>

          <div className="card flex flex-col items-center">
            <div className="img  w-[350px] rounded-[20%]">
            <img className='rounded-[5%]' src={draw3} alt="lion" />
            </div>
            <div className='flex flex-col gap-4 pl-10'>
             <p className='bg-pink-400 text-white p-2 rounded-full px-3 w-36'>3rd Rank Winner</p>
             <p className='font-bold text-xl'>Mekdes Cherinet</p>
             <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges

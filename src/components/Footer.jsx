import React from 'react'
import bgimg from './images/wave2.png'
import map from './images/map.png'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div style={{backgroundImage: `url(${bgimg}), url(${map})` , backgroundRepeat:'no-repeat', backgroundSize: '150%', paddingTop: '200px'}} className='bg-[#037afa] text-white'>
      <div className="foot-top grid lg:grid-cols-3 md:grid-cols-2">
        <div className='address flex flex-col m-5 p-5 gap-4'>
          <p className='text-xl'>ADDRESS</p>
          <div className='text-gray-400 flex flex-col gap-3'>
          <p>123 Street, Kazanchis, Addis Ababa</p>
          <p>+251 991 111 115</p>
          <p>info@gmail.com</p>
          </div>
          <div className='icons flex gap-5'>
            <div className="icon1 text-md rounded-full border-gray-400 border-[1px] p-2"><BsFacebook /> </div>
            <div className="icon2 text-md rounded-full border-gray-400 border-[1px] p-2"><BsTwitter /> </div>
            <div className="icon3 text-md rounded-full border-gray-400 border-[1px] p-2"><BsInstagram /> </div>
            <div className="icon4 text-md rounded-full border-gray-400 border-[1px] p-2"><BsLinkedin /> </div>
          </div>
        </div>
        <div className='quick-link m-5 p-5'>
          <p className='text-xl mb-4'>QUICK LINK</p>
          <ul className='flex flex-col gap-3'>
            <li className='hover:text-yellow-200 cursor-pointer hover:translate-x-2 duration-500'>About Us</li>
            <li className='hover:text-yellow-200 cursor-pointer hover:translate-x-2 duration-500'>Contact Us</li>
            <li className='hover:text-yellow-200 cursor-pointer hover:translate-x-2 duration-500'>Privacy Policy</li>
            <li className='hover:text-yellow-200 cursor-pointer hover:translate-x-2 duration-500'>Terms & Condition</li>
            <li className='hover:text-yellow-200 cursor-pointer hover:translate-x-2 duration-500'>Career</li>
          </ul>
        </div>
        <div className='newsletter m-5 p-5 flex flex-col gap-5'>
          <p className='text-xl'>NEWSLETTER</p>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Esse hic maiores quam voluptas commodi minima rem cumque 
            ut illum ea voluptatum, aliquam quas.</p>
          <p className='bg-white p-3 rounded-full'><input className='text-black' type="email" placeholder='Your Email' /></p>
        </div>
      </div>
      <div className="foot-buttom grid lg:grid-cols-2">
        <div className="left ml-6 p-5">o <span className='underline'>EWKET TECHNOLOGIES</span>, ALL Right Reserved. Designed By <span className='underline'>KURAZTECH</span></div>
         <div className="right">
          <nav>
            <ul className='flex justify-center gap-8 ml-5'>
              <li>Home</li>
              <li>Cookies</li>
              <li>Help</li>
              <li>FQAs</li>
            </ul>
          </nav>
         </div>
      </div>
    </div>
  )
}

export default Footer

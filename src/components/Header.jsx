import React, {useState} from 'react'
import img from './images/logo.png'
import { motion } from 'framer-motion'
import { HashLink as NavLink } from 'react-router-hash-link'


  

const Header = () => {

     const navLinkStyles = ({isActive}) => {
      return{
        color: isActive ? '#037afa' : 'black'
        
      }
     }

     const [open, setOpen] = useState(false);
     

  return (
    <div className='max-md:px-10 z-10 bg-white fixed right-0 top-0 left-0 shadow-md flex justify-between items-center md:justify-evenly max-md:py-7 md:py-2'>
      <motion.div 
       initial={{ translateX: -200 }}
       animate={{ translateX: 0 }}
       transition={{ duration: 0.3 }}
       className="logo">
       <img className='w-36 h-10' src={img} alt="Ewket logo" />
      </motion.div>
      
      <div className=''>
      <ul className='md:flex flex-shrink max-md:hidden absolute md:static md:z-auto max-md:mt-7 z-[10] left-0 w-full md:w-auto md:pl-0 max-md:pt-5 pl-9 text-center font-bold max-lg:gap-0 gap-3'>
        
            
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#Main'>HOME</NavLink>
            </li>
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#About'>ABOUT</NavLink>
            </li>
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#Blogs'>BLOGS</NavLink>
            </li>
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#Books'>BOOKS</NavLink>
            </li>
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#Challenges'>CHALLENGES</NavLink>
            </li>
            <li className='hover:text-[#0468cc] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center items-center text-center'>
              <NavLink duration={800} smooth to='#Contact'>CONTACT</NavLink>
            </li>
        </ul>
        

        {open && <ul className='md:flex md:hidden absolute md:static md:z-auto max-md:mt-7 z-[10] left-0 w-full md:w-auto md:pl-0 max-md:pt-5 pl-9 translate-all duration-500 ease-in text-center font-bold gap-3'>
        
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#Main'>HOME</NavLink>
            </li>
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#About'>ABOUT</NavLink>
            </li>
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#Blogs'>BLOGS</NavLink>
            </li>
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#Books'>BOOKS</NavLink>
            </li>
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#Challenges'>CHALLENGES</NavLink>
            </li>
            <li onClick={()=>(setOpen(!open))} className='hover:text-[#db7093] max-md:bg-slate-100 border-slate-300 max-md:border-[1px] duration-300 md:px-0 mx-3 max-md:h-12 max-md:py-7 md:my-0 md:my-7 flex flex-col justify-center text-center'>
              <NavLink duration={800} smooth to='#Contact'>CONTACT</NavLink>
            </li>
        </ul>
        }

      </div>
      <div className="max-lg:hidden">
        <button className='text-[#037afa] border-[1px] border-[#037afa] rounded-full px-6 py-2 hover:bg-[#037afa] hover:text-white duration-300 font-semibold'>Join Telegram</button>
      </div>
      <div onClick={()=>(setOpen(!open))} class="hamburger-menu md:hidden gap-2 flex flex-col justify-center w-[30px] h-[20px] cursor-pointer">
        <span style={{rotate: open && '45deg', transform: open && 'translateY(8px) translateX(5px)', transitionDuration: open ? '0.3s' : '0.3s'}} class="line1 w-[100%] h-[2px] bg-black transform transition-[0.3s ease]"></span>
        <span style={{opacity: open && '0', transitionDuration: open ? '0.3s' : '0.3s'}} class="line2 w-[120%] h-[2px] bg-black transform transition-[0.3s ease]"></span>
        <span style={{rotate: open && '-45deg', transform: open && 'translateY(-8px) translateX(5px)', transitionDuration: open ? '0.3s' : '0.3s'}} class="line3 w-[100%] h-[2px] bg-black transform transition-[0.3s ease]"></span>
      </div>
    </div>
  )
}

export default Header
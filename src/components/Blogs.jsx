import React from "react";
import { Link, Outlet,Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Blog1 from './blogs/Blog1'
import Blog2 from './blogs/Blog2'
import Blog3 from './blogs/Blog3'
import Blog4 from './blogs/Blog4'
import Blog5 from './blogs/Blog5'
import bgblog from './images/services-left-dec.jpg'

const Blogs = () => {
  return (
    <div id='Blogs'
     style={{backgroundImage: `URL(${bgblog})`}}
     className="h-full">
      <motion.div
        initial={{ translateY: -60 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 1 }}

        className="blogs-top mt-10 h-[15%] w-full flex flex-col gap-4">
        <p className="text-center font-bold text-violet-600">OUR BLOG POSTS</p>
        <p className="text-4xl text-center font-bold">
          Please Read <span className="text-violet-600">Blogs</span> For
          Childrens
        </p>
        <div className="w-full justify-center flex">
          <div className="h-[2px] w-14 mt-3 bg-violet-500"></div>
        </div>
        <p></p>
      </motion.div>
      <div className="blogs-middle grid grid-cols-3 lg:flex mt-5 gap-3 text-white gap-2 justify-center items-center text-center h-[15%] w-full">
        <Link to={"./Blog1"}>
          <div className="box text-2xl font-bold bg-[#6222cc] rounded-[20%] w-40 h-28 flex flex-col justify-center cursor-pointer">
            Arts
          </div>
        </Link>

        <Link to={"./Blog2"}>
          <div className="box text-2xl font-bold bg-[#008000] rounded-[20%] w-40 h-28 flex flex-col justify-center cursor-pointer">
            Helath
          </div>
        </Link>

        <Link to={"./Blog3"}>
          <div className="box text-2xl font-bold bg-[#ffa500] rounded-[20%] w-40 h-28 flex flex-col justify-center cursor-pointer">
            Education
          </div>
        </Link>

        <Link to={"./Blog4"}>
          <div className="box text-2xl font-bold bg-black rounded-[20%] w-40 h-28 flex flex-col justify-center cursor-pointer">
            Games
          </div>
        </Link>

        <Link to={"./Blog5"}>
          <div className="box text-2xl font-bold bg-[#db7093] rounded-[20%] w-40 h-28 flex flex-col justify-center cursor-pointer">
            Travel
          </div>
        </Link>
      </div>
      <Outlet />
      <Routes>
        <Route path='*' element={<Blog1 />} />
        <Route path='/Blog1' element={<Blog1 />} />
        <Route path='/Blog2' element={<Blog2 />} />
        <Route path='/Blog3' element={<Blog3 />} />
        <Route path='/Blog4' element={<Blog4 />} />
        <Route path='/Blog5' element={<Blog5 />} />
      </Routes>
    </div>
  );
};

export default Blogs;

import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, A11y} from 'swiper/modules';
import { SwiperCore, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import Card from "./Card";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import book1 from "./images/book/book1.jpg";
import book2 from "./images/book/book2.jpg";
import book3 from "./images/book/book3.webp";
import book4 from "./images/book/book4.jpg";
import book5 from "./images/book/book5.jpg";
import book6 from "./images/book/book6.jpg";
import book7 from "./images/book/book7.webp";
import book8 from "./images/book/book8.jpg";
import book9 from "./images/book/book9.webp";
import blogLeft from "./images/portfolio-left-dec.jpg";
const Books = () => {
  const sliderRef = useRef()
  const handleNext = ()=>{
    sliderRef.current.swiper.slideNext();
  }
  const handlePrev = ()=>{
    sliderRef.current.swiper.slidePrev();
  }
  return (
    <div id='Books' className="">
      <div
        style={{
          backgroundImage: `URL(${blogLeft})`,
          backgroundSize: "550px 500px",
          backgroundRepeat: "no-repeat",
        }}
        className="top grid lg:grid-cols-2 m-4"
      >
        <div className="book-top-left m-10 flex flex-col">
          <p className="text-lg font-bold text-blue-700 mb-5">OUR BOOKS</p>
          <p className="text-[34px] font-bold">See Our Recent</p>
          <p className="text-[34px] font-bold text-blue-700">Books</p>
          <div className="h-[2px] w-[60px] bg-blue-700 mt-5"></div>
        </div>
        <div
          style={{
            backgroundImage: `URL(${blogLeft})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px",
          }}
          className="book-top-right max-md:hidden flex gap-3 justify-center items-center"
        >
          <div onClick={handlePrev}
            className="w-12 h-12 flex flex-col justify-center items-center cursor-pointer text-white text-center rounded-full bg-gray-200 left-arrow hover:bg-pink-400 duration-500">
            <BsChevronCompactLeft size={30} />
          </div>
          <div onClick={handleNext}
            className="w-12 h-12 flex flex-col justify-center items-center cursor-pointer text-white text-center rounded-full bg-gray-200 right-arrow hover:bg-pink-400 duration-500">
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
        className="w-full h-full"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        ref={sliderRef}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          480:{slidesPerView:1},
          740:{slidesPerView:3},
          1275:{slidesPerView:5}
        }}
        autoplay={{delay: 2000}}
        loop={true}
        >
          <SwiperSlide>
            <Card name="Abebe Kebede" text="Bread Crumbs" img={book1} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="Sulwe" img={book2} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="The Leaf Theif" img={book3} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="The Girl Who Said No" img={book4} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="I Can Make This Promise" img={book5} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="ausdocuqo" img={book6} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="ausdocuqo" img={book7} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="ausdocuqo" img={book8} />
          </SwiperSlide>
          <SwiperSlide>
            <Card name="Abebe Kebede" text="ausdocuqo" img={book9} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Books;

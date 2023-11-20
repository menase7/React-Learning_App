import React from 'react'
import phone from  './images/phone-icon.png'
import email from  './images/email-icon.png'
import location from  './images/location-icon.png'

const Contact = () => {
  return (
    <div id='Contact' className=''>
      <div className="contact-top flex flex-col text-center gap-3">
        <p className='font-bold text-lg text-violet-500'>CONTACT US</p>
         <p className='text-4xl font-bold'>Get In Touch With Us 
          <span className='text-violet-500'> Now</span>
         </p>
        <div className='mt-4 flex flex-row justify-center'>
         <div className='bg-violet-500 w-[60px] h-[2px]'></div>
        </div>
      </div>
      <div className="contact-main gap-5 grid lg:grid-cols-2 shadow-md m-12 p-6 rounded-[7%]">
        <div className="left -z-10 map bg-green-400 relative w-fit h-fit container">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5194956763553!2d38.766277871951765!3d9.016283391044496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8598186f04e1%3A0x488636c1b82c1cb8!2sBloom%20Tower!5e0!3m2!1sam!2set!4v1692408606263!5m2!1sam!2set"
        width="380px"
        height="710px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
        <div className="right flex flex-col gap-7">
          <div className="right-top mt-3 grid md:grid-cols-3 justify-center">
            <div className="card1 flex flex-col gap-3 justify-center shadow-lg md:w-[140px] md:h-56 p-4 text-center items-center rounded-[20%]">
              <img src={phone} alt="phone" />
              <p>+251 99 112 2320</p>
            </div>
            <div className="card2 flex flex-col gap-3 justify-center shadow-lg md:w-[140px] md:h-56 p-4 flex text-center items-center rounded-[20%]">
              <img src={email} alt="speaker" />
              <p>ewket@gmail.com</p>
            </div>
            <div className="card3 flex flex-col gap-3 justify-center shadow-lg md:w-[140px] md:h-56 p-4 flex text-center items-center rounded-[20%]">
              <img src={location} alt="location" />
              <p>Addis Ababa, Kazanchis</p>
            </div>
          </div>
          <div className="right-buttom mt-5">
            <form action="" className=''>
              <div className="input flex gap-7 p-2">
              <div className="left-form flex flex-col gap-7">
                <div className="name shadow-sm border-[1px] p-3 pl-5 rounded-full"><input type="text" placeholder='Name' /></div>
                <div className="email shadow-sm border-[1px] p-3 pl-5 rounded-full"><input type="email" placeholder='Your Email' /></div>
                <div className="subject shadow-sm border-[1px] p-3 pl-5 rounded-full"><input type="text" placeholder='Subject' /></div>
              </div>
              <textarea className='shadow-sm border-[1px] p-3 pl-5 rounded-[8%]' name="" id="" cols="30" rows="7" placeholder='Message'>
              </textarea>
              </div>
              <div className="submit m-5 border-pink-400 text-pink-500 border-[1px] flex justify-center p-3 rounded-full">
               <input type="submit" value="Send Message Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

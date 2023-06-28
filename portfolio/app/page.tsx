'use client'

import { useRef } from 'react';

import {FaGlobeAfrica} from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import {projects} from './projects'
import { motion,useScroll,useMotionValueEvent } from "framer-motion"
import {useState} from 'react'
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsThreeDotsVertical,
  BsDiscord,
  BsFacebook,
} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {MdAlternateEmail} from 'react-icons/md';
import {MdKeyboardDoubleArrowDown} from 'react-icons/md';

export default function Home() {
  
  const [selectedId, setSelectedId] = useState(null);
  const { scrollYProgress } = useScroll();
  
  const projectsSection = useRef<any | null>();
  

  const handleClick = () => {
    projectsSection.current?.scrollIntoView({behavior: 'smooth'});
  };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  const goToBot = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    if(latest<0.5){
      document.getElementById("icon-1")!.style.opacity = "1";
    }
    else{
      document.getElementById("icon-1")!.style.opacity = "0.5";
    }

    if(latest>0.5&&latest<0.95){
      document.getElementById("icon-2")!.style.opacity = "1";
    }
    else{
      document.getElementById("icon-2")!.style.opacity = "0.5";
    }

    if(latest==1){
      document.getElementById("icon-3")!.style.opacity = "1";
    }
    else{
      document.getElementById("icon-3")!.style.opacity = "0.5";
    }
  })

  return (
  <div className='overflow-clip '>
    <div className='fixed h-screen w-32 grid invisible 2xl:visible'>
      <motion.div className='grid gap-5 my-auto' >
        <BsFill1CircleFill id='icon-1' className='text-main-color text-3xl mx-auto' onClick={goToTop}/>
        <BsThreeDotsVertical className='text-main-color text-3xl mx-auto'/>
        <BsFill2CircleFill id='icon-2' className='text-main-color text-3xl mx-auto' onClick={handleClick}/>
        <BsThreeDotsVertical className='text-main-color text-3xl mx-auto'/>
        <BsFill3CircleFill id='icon-3' className='text-main-color text-3xl mx-auto' onClick={goToBot}/>
      </motion.div>
      
    </div>

    {/* <div className='absolute gap-10 flex right-20 top-10'>
      <button className='text-4xl text-main-color'><FaGlobeAfrica/></button>
      <button className='text-4xl text-main-color'><FaMoon/></button>
    </div> */}

    <div className='grid  h-screen place-items-center '>
      <div>
        <h1 className=' text-9xl  font-GoodTimes text-main-color relative '>Portfolio</h1>
        <br></br>
        <p className='font-Sansation text-detail-color text-center text-2xl '>Rafał Grabowski</p>
        
        
        
      </div>
    </div>
    <h1 className='font-Sansation text-detail-color text-6xl pl-30 relative left-60' ref={projectsSection} >Projekty:</h1>

    
    {/* <div className='mx-auto flex relative left-32 bg-white rounded-3xl m-5 '>
        <button className='right-[220px] top-[220px] absolute w-20 h-20 bg-detail-color rounded-full text-white'>{">"}</button>
        <button className=' top-[220px] absolute w-20 h-20 bg-detail-color rounded-full text-white'>{"<"}</button>
        <img src='/adaline_app.png' className='object-fill'></img>
        <p className='flex-auto text-center bg-'>opis</p>
    </div> */}
    


    <div className='flex flex-wrap place-content-center relative left-20 w-[95vw]'> 
      {projects.map((x,index) =>
        <motion.div 
          whileHover={{scale:1.1}} 
          transition={{ delay: 0.2 }}
          key={index} 
          className='m-4 grid place-items-center '>
          <div key={index} className="relative">
            <a href={x.url} className="font-Sansation ">
              <img src={x.imageName} className='center rounded-3xl w-96 h-60 object-fit'/>
            </a>
            <div key={index} className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-3xl">
              <h3 className="text-xl text-white font-bold font-Sansation">{x.title}</h3>
              <p className="mt-2 text-sm text-gray-300 font-Sansation">{x.content}</p>
            </div>
            </div> 
          </motion.div> 
      )}   
    </div>

      <table className='mx-auto bg-main-color p-5 mt-5 w-[25vw] text-center rounded-3xl'>
        <thead>
          <tr>
            <td colSpan={2}>
              <h1 className='font-Sansation text-detail-color text-4xl text-center mt-5'>Kontakt</h1>
            </td>
          </tr>
          <tr className='text-detail-color text-2xl font-Sansation'>
            {/* <th>Wyślij wiadomość</th> */}
            {/* <th>Media</th> */}
          </tr>
        </thead>

        <tbody>
          <tr>
            {/* <th className='text-detail-color font-Sansation'>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
              <button>Wyślij</button>
            </th> */}

            <th>
              <div className='block'>
              
              <div className='mb-5 font-Sansation'>

                <div className='flex justify-center gap-5'>
                <p className='font-Sansation text-detail-color text-3xl pl-30 min-w-min '><MdAlternateEmail/></p>
                <p className='text-detail-color font-Sansation my-auto text-xs' >r.grabowski2001@gmail.com</p>
                </div>

                
                
                <div className='flex justify-center gap-5'>
                  <p className='font-Sansation text-detail-color text-3xl pl-30 min-w-min'><BsDiscord/></p>
                  <a className='text-detail-color font-Sansation my-auto text-xs' target="_blank" href='https://discordapp.com/users/Rafal#0570'>https://discordapp.com/users/Rafal#0570</a>
                </div>
                
                
                
                <div className='flex justify-center gap-5'>
                  <p className='font-Sansation text-detail-color text-3xl pl-30 min-w-min '><BsFacebook/></p>
                  <a className='text-detail-color font-Sansation my-auto text-xs' target="_blank" href='https://www.facebook.com/profile.php?id=100014171445153'>https://www.facebook.com/profile.php?id=100014171445153</a>
                </div>

                <div className='flex justify-center gap-5 '>
                  <p className='font-Sansation text-detail-color text-3xl pl-30 min-w-min'><AiFillGithub/></p>
                  <a className='text-detail-color font-Sansation my-auto text-xs' target="_blank" href='https://github.com/Bluefish5'>https://github.com/Bluefish5</a>
                </div>

              </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>

    <div className='mx-auto bg-main-color p-5 mt-5'>
      <p className='text-center text-detail-color font-Sansation text-xs'>Copyright © 2023 - rafal and contributors</p>
    </div>
  </div>
  )
}

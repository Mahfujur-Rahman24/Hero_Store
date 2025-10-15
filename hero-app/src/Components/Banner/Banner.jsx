import React from 'react';
import PlayStore from '../../assets/Playstore.png'
import AppStore from '../../assets/appstore.svg.png'
import HeroImg from '../../assets/hero.png'
const Banner = () => {
    return (
       <div className="hero mt-20">
  <div className=" text-center">
    <div className="">
      <h1 className="text-7xl font-bold ">We Build <br />
<span className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black text-7xl '>Productive</span> Apps</h1>
      <p className="text-lg font-normal mt-6 mb-6">
        At ZenEcho, we craft innovative apps designed to make everyday life simpler,
         smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex justify-center gap-4 mb-7'>
      <a href="https://play.google.com/store/apps?hl=en"><button className="btn border-[#D2D2D2] border-1 w-48 text-lg font-semibold"><img src={PlayStore} alt="" className='w-10 h-6' />Google Play</button></a>
      <a href="https://www.apple.com/app-store/"><button className="btn border-[#D2D2D2] border-1 gap-4 w-48 text-lg font-semibold"><img src={AppStore} alt="" className='w-7 h-6' />app Store</button></a>
    </div>
    </div>
     <div className='mt-10'>
    <img src={HeroImg} alt="" />
  </div>
  </div>
 
</div>

    );
};

export default Banner;
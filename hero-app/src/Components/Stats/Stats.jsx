import React from 'react';

const Stats = () => {
    return (
       <section className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-20 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="flex flex-col md:flex-row justify-around">
        
        <div className='text-[#FFFFFF]'>
          <h3 className="text-base font-normal mb-4">
            Total Downloads
          </h3>
          <p className="text-6xl font-extrabold ">29.6M</p>
          <p className="text-base mt-4 font-normal">
            21% More Than Last Month
          </p>
        </div>

  
        <div>
          <h3 className="text-base font-normal mb-4">
            Total Reviews
          </h3>
          <p className="text-6xl font-extrabold">906K</p>
          <p className="text-base mt-4 font-normal">
            46% More Than Last Month
          </p>
        </div>

     
        <div>
          <h3 className="text-base font-normal mb-4">
            Active Apps
          </h3>
          <p className="text-6xl font-extrabold">132+</p>
          <p className="text-base mt-4 font-normal">
            31 More Will Launch
          </p>
        </div>
      </div>
    </section>
    );
};

export default Stats;
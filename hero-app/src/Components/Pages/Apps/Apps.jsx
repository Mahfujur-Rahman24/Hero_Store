import React, { Suspense,  } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({data}) => {
    


    return (
        <div>
        <div className='text-center mt-20'>
            <h1 className='font-bold text-5xl text-black'>Trending Apps</h1>
            <p className='text-[#627382] text-lg font-normal mt-3'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <Suspense fallback={<span className="loading loading-bars loading-xl text-primary"></span>}>
       <div className='gap-5 mb-20 mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto'>
        {
        data.map((app) => <App key={app.id} app={app}></App>)
        }
        </div>
        </Suspense>

         <div className='flex justify-center mb-10'>
        <Link to='/allApps'><button className='btn text-white font-semibold text-base px-7 py-5 bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Show All</button></Link>
    </div>
        
        </div>
    );
};

export default Apps;
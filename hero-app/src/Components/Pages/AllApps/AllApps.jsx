import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApps from '../SingleApps/SingleApps';
import NoAppFound from '../NoAppFound/NoAppFound';

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = data.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='text-center mt-20'>
        <h1 className='font-bold text-5xl text-black'>Trending Apps</h1>
        <p className='text-[#627382] text-lg font-normal mt-3'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <Suspense fallback={<span className="loading loading-bars loading-xl text-primary"></span>}>

        <div className='max-w-7xl mx-auto'>

          <div className='mt-10 mb-4 flex justify-between items-center'>
            <span className='text-2xl font-semibold text-[#001931]'>
              ({filteredApps.length}) Apps Found
            </span>

            <label className="input flex items-center gap-2 border rounded-lg px-3 py-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search Apps"
                className="outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>

         
          <div className='gap-5 mb-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {filteredApps.length > 0 ? (
              filteredApps.map(app => <SingleApps key={app.id} app={app}></SingleApps>)
            ) : (
                <div className="flex justify-center items-center col-span-full">
      <NoAppFound></NoAppFound>
    </div>
                
            )}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default AllApps;

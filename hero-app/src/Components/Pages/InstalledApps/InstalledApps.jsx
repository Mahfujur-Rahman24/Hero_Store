import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InstalledApps = ({ a, onUninstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = a;

  return (
    <div className='bg-white rounded-lg flex justify-between shadow-sm hover:shadow-md transition'>
      <div className='flex m-2 gap-4'>
        <figure className='px-2 py-2 bg-[#D9D9D9] rounded-lg'>
          <img className='w-15 h-15 lg:h-15' src={image} alt={title} />
        </figure>

        <div className='py-3'>
          <span className='text-[20px] font-medium text-[#001931]'>{title}</span>

          <div className='font-medium text-base mt-1'>
            <span><FontAwesomeIcon icon={faDownload} style={{ color: "#00D390" }} /></span>
            <span className="text-[#00D390] mr-3">{downloads}</span>

            <span><FontAwesomeIcon icon={faStar} style={{ color: "#FF8811" }} /></span>
            <span className='text-[#FF8811] mr-3 ml-0.5'>{ratingAvg}</span>

            <span className='mr-2 font-normal text-[#627382]'>{size} MB</span>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center mr-4'>
        <button
          onClick={() => onUninstall(id)}
          className='btn bg-[#00D390] text-white hover:bg-[#0CA76E]'
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApps;

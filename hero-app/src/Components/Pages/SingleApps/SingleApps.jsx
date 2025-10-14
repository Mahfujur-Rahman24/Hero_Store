import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router';

const SingleApps = ({app}) => {
    const {image,title,downloads,ratingAvg,id} = app;

    return (
<Link to={`/appDetails/${id}`} className='bg-base-100 shadow-sm rounded-sm max-h-[404px] max-w-[327px] mx-auto'>

      <div>
        
  <figure className='px-15 py-8 bg-[#D9D9D9] mx-4 mt-4 rounded-lg'>
    <img
    className='w-40 h-32 lg:h-38'
      src={image}
      alt={title} />
  </figure>
  <div className="m-4">
    <h2 className="mb-4 card-title font-medium text-[20px] text-[#001931]">
      {title}

    </h2>

    <div className="flex justify-between">

        <div className="badge bg-[#F1F5E8] text-[#00D390] text-base font-medium px-2 py-4">
      <span><FontAwesomeIcon icon={faDownload} style={{color: "#00D390",}} /></span>
      <span>{downloads}</span>
      </div>

      <div className="badge bg-[#FFF0E1] text-[#FF8811] text-base font-medium px-2 py-4">
      <span><FontAwesomeIcon icon={faStar} beat style={{color: "#FF8811"}} /></span>
      <span >{ratingAvg}</span>
    </div>
    </div>


  </div>
</div>

</Link>
    );
};

export default SingleApps;
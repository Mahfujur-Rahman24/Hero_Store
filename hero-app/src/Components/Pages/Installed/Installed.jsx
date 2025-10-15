import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromStoredDB } from '../../../Utility/AddToDB';
import InstalledApps from '../InstalledApps/InstalledApps';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

const Installed = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApp = storedAppData.map(id => parseInt(id));
    const installedAppList = data.filter(ap => convertedStoredApp.includes(ap.id));
    setInstalledApp(installedAppList);
  }, [data]);

  
  const handleUninstall = (id) => {
    removeFromStoredDB(id);
    const updatedList = installedApp.filter(app => app.id !== id);
    setInstalledApp(updatedList);
    toast.success(`Uninstalled successfully`);
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "High-Low") {
      const sortedHighTOLow = [...installedApp].sort((a, b) =>b.size - a.size);
      setInstalledApp(sortedHighTOLow);
    }
    if (type === "Low-High") {
      const sortedLowToHigh = [...installedApp].sort((a, b) => a.size - b.size);
      setInstalledApp(sortedLowToHigh);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <ToastContainer />

      <div className='text-center mt-20'>
        <h1 className='font-bold text-5xl text-black'>Your Installed Apps</h1>
        <p className='text-[#627382] text-lg font-normal mt-3'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className='mt-10 mb-4 flex justify-between items-center'>
          <h1 className="text-2xl font-bold mb-4">Installed Apps ({installedApp.length})</h1>

          <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1 text-[#8394a3] border-[#D2D2D2]">
               {sort ? sort : "Sort By"} <FontAwesomeIcon icon={faCircleChevronDown} />
            </div>

            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a onClick={() => handleSort("High-Low")}>High-Low</a></li>
              <li><a onClick={() => handleSort("Low-High")}>Low-High</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {installedApp.length > 0 ? (
            installedApp.map((a) => (
              <InstalledApps key={a.id} a={a} onUninstall={handleUninstall} />
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center mt-5">No apps installed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installed;

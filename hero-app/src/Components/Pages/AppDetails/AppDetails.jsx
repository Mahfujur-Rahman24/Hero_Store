import { useLoaderData, useParams } from "react-router";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ToastContainer, toast } from 'react-toastify';
import { addToStoredDB, getStoredApp } from "../../../Utility/AddToDB";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faStar } from "@fortawesome/free-regular-svg-icons";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const appId = parseInt(id);

  const [loading, setLoading] = useState(true);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);

  const singleApp = data.find((app) => app.id === appId);

  const sortedRatings = [...singleApp.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false));
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const installedApps = getStoredApp();
    if (installedApps.includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);


  const handleInstall = (id) => {
    setInstalling(true);
    setTimeout(() => {
      setInstalling(false);
      setInstalled(true);
      addToStoredDB(id);
      toast.success(`${singleApp.title} installed successfully!`);
    }, 1000);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    );

  return (
    <div className="max-w-10/12 mx-auto my-10">
       <ToastContainer />

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img src={singleApp.image} alt={singleApp.title} className="w-80 h-full" />
        <div>
          <h1 className="text-3xl font-bold text-[#001931]">{singleApp.title}</h1>
          <p className="text-[#627382] font-normal text-lg mt-1">Developed by <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-lg font-bold">{singleApp.companyName}</span></p>

        <div className="border-t border-gray-300 my-8 lg:w-7xl"></div>

          <div className="flex flex-wrap gap-8 mt-6 text-[#001931]">
            <div>
              <FontAwesomeIcon icon={faDownload} className="text-[#00D390] text-4xl" />
               <p className="text-base text-[#001931]">Downloads</p>
              <p className="font-extrabold text-4xl text-[#001931]">{singleApp.downloads}</p>
             
            </div>

            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#FF9E0D] text-4xl" />
              <p className="text-base text-[#001931]">Average Ratings</p>
              <p className="font-extrabold text-4xl text-[#001931]">{singleApp.ratingAvg}</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faCommentDots} className="text-[#9F62F2] text-4xl" />
              <p className="text-base text-[#001931]">Total Reviews</p>
              <p className="font-extrabold text-4xl text-[#001931]">{singleApp.reviews}K</p>
              
            </div>
          </div>

          <button
            onClick={() => handleInstall(appId)}
            disabled={installed || installing}
            className={`mt-6 px-5 py-2 rounded-lg text-white flex items-center gap-2 ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-green-700"
            }`}
          >
            {installing ? (
              <>
                <span className="loading loading-bars loading-sm text-white"></span>
                Installing...
              </>
            ) : installed ? (
              "Installed"
            ) : (
              `Install Now (${singleApp.size} MB)`
            )}
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 my-8 lg:w-6x2 lg:mr-35"></div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sortedRatings} layout="vertical" margin={{ left: 40 }}>
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" radius={[0, 1, 1, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-300 my-8 lg:w-6x2 lg:mr-35 mt-10"></div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

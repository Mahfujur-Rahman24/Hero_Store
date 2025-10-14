import React from "react";
import ErrorPageImg from '../../../assets/error-404.png'

const ErrorPage = () => {
  return (
   <div className="flex flex-col justify-center items-center h-[80vh] text-center">
         <img
           src={ErrorPageImg}
           alt="App Not Found"
           className="w-80 mb-6"
         />
         <h1 className="text-4xl font-bold text-[#1e293b] mb-2">
           Oops, page not found!
         </h1>
         <p className="text-[#64748b] mb-6 text-lg">
          The page you are looking for is not available.
         </p>
         <button
           onClick={() => window.history.back()}
           className="bg-[#7e3af2] hover:bg-[#6d28d9] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
         >
           Go Back!
         </button>
       </div>
  );
};

export default ErrorPage;

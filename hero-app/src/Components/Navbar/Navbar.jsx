import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitIcon from '../../assets/Git.png'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router';


const Navbar = () => {
  const link = (
    <>
      <Link to='/' className='hover:text-purple-600 focus:text-[#632EE3] active:text-[#632EE3] focus:underline'><li>Home</li></Link>
      <Link to='/allApps' className='hover:text-purple-600 focus:text-[#632EE3] active:text-[#632EE3] focus:underline'><li>Apps</li></Link>
      <Link to='/installed' className='hover:text-purple-600 focus:text-[#632EE3] active:text-[#632EE3] focus:underline'><li>Installation</li></Link>
    </>
  );

  return (
    <div className=' bg-[#FFFFFF]'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ml-10"
            >
              {link}
            </ul>
          </div>

          <div className='lg:ml-10'>
          <a href="/" className='flex gap-1 text-xl'>
           <img src={Logo} alt="" className='h-7 w-full' />
           <span className='font-bold text-base bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>
           ZenEcho
           </span>
          </a>
          </div>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{link}</ul>
        </div>

        <div className="navbar-end lg:mr-10">
          <a href="https://github.com/">
          <button className="btn flex items-center gap-2  bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
            <img src={GitIcon} alt="" className='w-full h-6'/>
            <span className='font-semibold text-base text-white'>
            Contribute
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

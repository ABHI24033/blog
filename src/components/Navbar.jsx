import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [opennav,setOpennav]=useState(false);
  return (
    <div>
      <nav className="bg-gray-800 py-4">
    <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center">
            {/* <!-- Logo --> */}
            <div className="flex-shrink-0 mx-4">
                <a href="#" className="text-white font-bold text-xl">Blogging Platform</a>
            </div>
            {/* <!-- Navigation Links -->hidden md:block */}
            <div className={`  bg-slate-800  ${opennav==true?" block absolute top-14 right-0 h-[90vh] py-6 transition-all delay-1000 w-1/4 ":"-right-40 hidden sm:block mx-4"}`}>
                <ul className={`flex space-x-4 sm:flex-row flex-col gap-4`}>
                    <li><Link to={'/'} className="text-white hover:text-gray-300 mx-4">Home</Link></li>
                    <li><Link to={'/create'} className="text-white hover:text-gray-300 my-4">Create blog</Link></li>
                    
                </ul>
            </div>
            {/* <!-- Mobile Menu Button (hidden on larger screens) --> */}
            <div className="sm:hidden mx-4">
                <button className="text-white focus:outline-none" onClick={()=>setOpennav(!opennav)}>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</nav>

    </div>
  );
}

export default Navbar;

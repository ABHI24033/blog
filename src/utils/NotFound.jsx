import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className=' bg-blue-200 min-h-[90vh] w-[100%] flex justify-center items-center'>
      <div className=' flex justify-center items-center flex-col'>
        <h1 className=' text-4xl text-orange-600 font-bold my-10'>Page Not Found</h1>
        <Link to={"/"} className='bg-blue-600 text-white py-2 px-4 rounded-md ' >Back to Home</Link>
        
      </div>
    </div>
  );
}

export default NotFound;

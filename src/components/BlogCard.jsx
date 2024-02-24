import React from 'react';
import { stringCut } from '../utils/utils';
import { Link } from 'react-router-dom';
const BlogCard = ({item}) => {
    return (
        <div className=' my-2'>
            <div className="w-[100%] md:w-[70%] p-6 bg-white border border-gray-200 rounded-lg shadow">
                {/* <a href="#"> */}
                    <h5 className="mb-2 leading-tight text-2xl font-bold tracking-tight text-gray-900">{item?.title}</h5>
                    <p className='text-xs leading-tight font-semibold'>Author:-{item?.author}</p>
                {/* </a> */}
                <p className="mb-3 font-normal text-gray-700">{stringCut(item?.desc,200)}</p>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.desc}</p> */}
                <Link 
                to={`/detail/${item?.id}`} 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  ">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>

        </div>
    );
}

export default BlogCard;

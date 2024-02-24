import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../features/BlogPostSlice';

const Details = () => {
    const post = useSelector((state) => state.blogPostslice);
    const { data, loading } = post;
    const param = useParams();
    const dispatch = useDispatch();
    const { id } = param;
    const getPostById = data.find((items) => items.id == id);
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    if (loading) {
        return <h1 className=' text-center mt-10 font-bold text-3xl'>Loading...</h1>
    };
    
    return (
        <div className='mx-[5rem] my-[2rem]'>
            <div>
                <div className=' border-b-2 border-gray-900'>
                    <h1 className=' text-2xl text-slate-900 font-bold'>{getPostById?.title} </h1>
                    <p className=' text-xs font-semibold'>Auther: {getPostById?.author ? getPostById.author : "it's random data no author"}</p>
                </div>

                <div className=' my-4 w-[90%] text-xl'>
                    <p>{getPostById?.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;

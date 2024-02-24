import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../features/BlogPostSlice';
import Pagination from '../components/Pagination';


const Home = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recoresPerPage = 10;
  const indexOfLastPage = currentPage * recoresPerPage;
  const indexOfFirstPage = indexOfLastPage - recoresPerPage;


  const dispatch = useDispatch();
  const post = useSelector((state) => state.blogPostslice);
  const { data, loading } = post;
  let reverseData;
  useEffect(() => {
    if(data?.length>0){
      reverseData = data?.map((_item, index) => { return data[data.length - 1 - index]; })
      setBlogPost(reverseData);
    }
  }, [data]);

  // paginaiton
  const currentData = blogPost?.slice(indexOfFirstPage, indexOfLastPage);
  const noOfPages = Math.ceil(blogPost?.length / recoresPerPage);

  useEffect(() => {
    dispatch(getAllPosts());

  }, []);





  //  console.log(reversearray);
  if (loading) {
    return <h1 className=' text-center mt-10 font-bold text-3xl'>Loading...</h1>
  }

  return (
    <div className=' bg-gray-200 min-h-[100vh] px-[1rem] md:px-[5rem] py-[2rem]'>

      {
        currentData && currentData.map((item, index) => (
          <BlogCard item={item} key={index} />
        ))
      }
      <div>
        <Pagination
          noOfPages={noOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
}

export default Home;

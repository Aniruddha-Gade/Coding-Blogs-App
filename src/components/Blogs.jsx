import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import BlogDetails from './BlogDetails'
import Loading from './Loading';
import { FaRegSadCry } from 'react-icons/fa';



const Blogs = () => {
  const { loading, posts, darkMode } = useContext(AppContext);


  // console.log("Printing inside the blogs components")
  // console.log(posts);


  return (
    <div className={`${darkMode ? 'dark' : ''} max-w-[670px] py-8 flex flex-col mt-[80px] mb-[40px] duration-200`}>
      {
        loading ? <Loading /> :
          (
            posts.length === 0 ?
              (
                <div className='text-3xl font-extrabold flex justify-center items-center h-[15rem] 
                gap-4 text-[#0079ff] dark:text-slate-300' >
                  No Post Found
                  <FaRegSadCry/>
                </div>
              ) :

              (
                posts.map((post) => (
                  <div key={post.id} className='mb-7'>
                    <BlogDetails post={post} />
                  </div>
                ))
              )
          )
      }


    </div>
  )
}

export default Blogs



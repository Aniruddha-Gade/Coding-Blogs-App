import React, { useContext, useEffect, useState } from 'react'
import { FaRegSadCry } from 'react-icons/fa';

import Header from './Header';
import BlogDetails from './BlogDetails';

import { useLocation, useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppContext';
import Loading from './Loading';
// import { baseUrl } from '../baseUrl';

const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { setLoading, loading, darkMode } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);



  async function fetchRelatedBlogs() {
    setLoading(true);

    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const result = await fetch(url);
      const data = await result.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }

    catch (error) {
      console.log("Eroor is ---> ", error);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  // calling function by effect Hook
  useEffect(() => {
    if (blogId) fetchRelatedBlogs();

  }, [location.pathname])


  // console.log("Printing relatedBlogs data inside BlogPage")
  // console.log(relatedblogs)


  return (
    <div className={`mt-[120px] ${darkMode ? 'dark' : ''} mb-14`}>
      <Header />

      <div className="mx-auto max-w-[670px] mt-[25px] px-4">
        <button
          onClick={() => navigate(-1)}
          className="rounded-md px-4 py-2 text-white transition-all outline-none duration-200
           bg-[#0079ff] hover:bg-blue-500 flex justify-start items-center mb-[15px] ml-6 sm:ml-0"
        >
          back
        </button>

        {loading ? (
          <Loading />
        ) : blog ? (
          <div className="flex flex-col mx-auto items-center">
            <BlogDetails post={blog} />
            <h2 className="text-3xl dark:text-[#0079ff] font-bold mt-[50px] mb-[10px]  ">
              Related Blogs
            </h2>

            <div className="space-y-7">
              {relatedblogs.length > 0 ? (
                relatedblogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))
              ) : (
                <p className="text-xl">No Related Posts Found</p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-3xl font-extrabold flex justify-center items-center min-h-[45rem] gap-4 text-[#0079ff] dark:text-slate-300">
            No Post Found
            <FaRegSadCry />
          </div>
        )}
      </div>
    </div>

  )

}

export default BlogPage
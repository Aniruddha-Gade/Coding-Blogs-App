import React, { useContext } from 'react'

import Header from './Header'
import Blogs from './Blogs'
import Pagination from './Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const CategoryPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // const category = location.pagename.split('/').at(-1);
  const category = location.pathname.split('/')[2];
  const { darkMode } = useContext(AppContext);

  console.log("Data inside categrory page is --> ")
  console.log(category);


  return (
    <div className={`${darkMode ? 'dark' : ''} dark:bg-[#1e2a47]`}>
      <Header />

      <div className="mx-auto max-w-[670px] mt-[120px] md:flex-none flex flex-col items-center">
        <button
          onClick={() => navigate(-1)}
          className="rounded-md px-4 py-2 text-white transition-all outline-none duration-200
         bg-[#0079ff] hover:bg-blue-500 flex justify-start items-center mb-[15px] sm:-ml-[37rem] -ml-[18rem]"
        >
          back
        </button>

        <h2 className="text-3xl dark:text-[#0079ff] font-bold mt-[40px] 
                        sm:flex-row flex flex-col items-center sm:items-start flex-wrap gap-5">
          <p>Blogs on </p>
          <p>{category}</p>
        </h2>

        <div className="-mt-[90px]">
          <Blogs />
        </div>
      </div>

      <Pagination />
    </div>



  )
}

export default CategoryPage
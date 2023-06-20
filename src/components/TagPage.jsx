import React, { useContext } from 'react'

import { useNavigate, useLocation } from 'react-router-dom';

import Header from './Header'
import Blogs from './Blogs'
import Pagination from './Pagination'
import { AppContext } from '../context/AppContext';

const TagPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  const { darkMode } = useContext(AppContext)
  return (
    <div className={`mt-[120px] ${darkMode ? 'dark' : ''}  lg:min-h-[35rem] min-h-[50rem] `}>
      <Header />

      <div className='mx-auto max-w-[670px] md:flex-none flex flex-col items-center'>
        <button onClick={() => navigate(-1)}
          className='rounded-md px-4 py-2 text-white transition-all outline-none 
                 duration-200 bg-[#0079ff] hover:bg-blue-500 flex justify-start items-center mb-[15px] -ml-[18rem] sm:-ml-[37rem] '>
          back
        </button>


        <h2 className="text-3xl dark:text-[#0079ff] font-bold mt-[40px] 
                          sm:flex-row flex flex-col items-center  flex-wrap gap-5  ">
          <p classname='sm:order-first'>Blogs Tagged </p>
          <p className='sm:order-last'>#{tag}</p>
        </h2>


        <div className='-mt-[90px] '>
          <Blogs />
        </div>

      </div>
      <Pagination />
    </div>
  )
}

export default TagPage
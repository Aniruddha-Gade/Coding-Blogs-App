import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const { page, handlePageChange, totalPages, darkMode } = useContext(AppContext);

  return (
    <div className={`w-full flex justify-center items-center border-t-4 dark:border-none fixed 
    bottom-0 bg-white ${darkMode ? 'dark' : ''} dark:bg-[#141d2f] duration-200`}>
      <div className='flex justify-between w-11/12 max-w-[670px] py-4 items-center'>
        <div className='flex gap-x-2'>
          <button
            onClick={() => handlePageChange(page - 1)}
            className={`rounded-md px-4 py-2 text-white ${page > 1 ? 'bg-[#0079ff] sm:hover:bg-blue-500' : 'bg-blue-400  cursor-not-allowed'
              } transition-all duration-200 outline-none`}
            disabled={page <= 1}
          >
            Previous
          </button>

          
           
            <button onClick={() => handlePageChange(page + 1)}
              className={`rounded-md  px-4 py-2  text-white transition-all outline-none duration-200
              ${page < totalPages ? 'bg-[#0079ff] sm:hover:bg-blue-500': 'bg-blue-400  cursor-not-allowed' }`}
              disabled={page >= totalPages}
              >
              Next
            </button>
          
        </div>

        <p className='font-bold text-sm dark:text-white'
        >page {page} of {totalPages}</p>

      </div>
    </div>
  )
}

export default Pagination;


// {
//   page > 1 ?
//   (<button onClick={() => handlePageChange(page - 1)}
//     className='rounded-md  px-4 py-2 bg-[#0079ff] text-white hover:bg-blue-500  transition-all duration-200 outline-none'>
//     Previous
//   </button>)
//   : 
//   (<button 
//     className='rounded-md  px-4 py-2 bg-blue-400 text-white hover:cursor-not-allowed  transition-all duration-200 outline-none'>
//     Previous
//   </button>)
// }


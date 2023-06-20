import React from 'react'

import Header from './Header'
import Pagination from './Pagination'
import Blogs from './Blogs'


const Home = () => {
  return (
    <div className='flex justify-center items-center '>
     
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default Home;
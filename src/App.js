import React, { useEffect, useContext } from 'react';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import BlogPage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';
import ScrollToTop from './components/ScrollToTop'

import { AppContext } from './context/AppContext';



const App = () => {

  // data fetching function from context
  const { fetchBlogPosts, darkMode, setDarkMode } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Effect Hook 
  useEffect(() => {

    const page = searchParams.get("page") ?? 1

    if (location.pathname.includes('tag')) {
      const tag = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchBlogPosts(Number(page), tag);
    }

    else if (location.pathname.includes('category')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchBlogPosts(Number(page), null, category);
    }

    else fetchBlogPosts(Number(page));
    // page ---->  location.search 

  }, [location.search, location.pathname])




  useEffect(() => {
    // Retrieve darkMode value from local storage
    const savedDarkMode = localStorage.getItem("darkMode");

    // If a value exists in local storage, set the darkMode state accordingly
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Store darkMode value in local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);




  return (

    <div className={`h-full w-full flex flex-col gap-y-1  ${darkMode ? 'dark' : ''}`}>


      <p>Heeloo this is inside App</p>

      {/* experiencing an issue where, after scrolling down the page and clicking on the next/previous page, the new page appears below the scrolled position instead of starting from the top in react blogs app */}
      <ScrollToTop />

      <div className='dark:bg-[#1e2a47] duration-200'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:blogId' element={<BlogPage />} />
          <Route path='/tags/:tag' element={<TagPage />} />
          <Route path='/categories/:category' element={<CategoryPage />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

// http://localhost:3001/tags/Deep-Learning
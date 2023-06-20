import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

const BlogDetails = ({ post }) => {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={`${darkMode ? 'dark' : ''} dark:text-slate-300 bg-slate-200 dark:bg-slate-700 
      rounded-2xl p-8 duration-200 w-[23rem] sm:w-full `} >
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-extrabold text-lg hover:underline duration-500 dark:text-slate-100">
          {post.title}
        </span>
      </NavLink>

      <p className="text-sm mt-[4px]">
        By <span className="italic">{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category.replaceAll(' ', '-')}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>

      <p className="text-sm mt-[4px]">Posted on {post.date}</p>
      <p className="text-md mt-[14px]">{post.content}</p>

      <div className="flex flex-wrap gap-x-2">
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(' ', '-')}`} key={index}>
            <span className="text-blue-400 underline font-bold text-xs mt-[5px] hover:text-blue-500 duration-300">
              #{tag}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

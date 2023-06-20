
import React, {useContext } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Header = () => {

    const { darkMode, setDarkMode } = useContext(AppContext);

    return (

        <div className={`w-full shadow-md fixed top-0 ${darkMode ? 'dark' : 'white'} `}>
            <div className=" bg-white dark:bg-[#141d2f] py-4 duration-200">

                <div className="max-w-[670px] flex justify-between items-center sm:mx-auto mx-2 ">
                    <NavLink to='/'>
                        <h1 className="font-extrabold text-[1.6rem] sm:text-3xl rounded-xl p-2 sm:p-3  uppercase
                         dark:text-[#0079ff] dark:bg-slate-800 bg-slate-300 tracking-widest duration-500"
                        >
                            coding Blogs
                        </h1>
                    </NavLink>
                    {/* text-[1.6rem] sm:text-3xl p-2  sm:p-3 rounded-xl */}
                    <div
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex gap-[1rem] items-center  text-[1.6rem] sm:text-3xl rounded-xl p-2 sm:p-3 cursor-pointer select-none
                         dark:text-white bg-slate-300 dark:bg-slate-800 sm:dark:hover:bg-slate-700 sm:hover:bg-slate-400 
                            duration-300" >

                        <p className="font-bold tracking-widest">{darkMode ? 'Light' : 'Dark'}</p>
                        <p className="text-2xl duration-500 animate-bounce "> {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />} </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;





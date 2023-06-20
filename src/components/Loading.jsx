import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Loading = () => {
    const { darkMode } = useContext(AppContext);

    return (
        <div
            className={`flex flex-col gap-y-12 border sm:w-full lg:min-h-[35rem] min-h-[45rem] top-0 border-blue-300 dark:border-none shadow rounded-2xl p-7 ${darkMode ? 'dark' : ''
                }`}
        >
            <div className="animate-pulse flex space-x-4 w-full sm:w-[670px] ">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    <div className="space-y-3">
                        <div className="flex justify-between gap-x-1 items-center w-full sm:w-[560px] ">
                            <div className="h-2 bg-slate-700 rounded w-[130px] sm:w-[270px] "></div>
                            <div className="h-2 bg-slate-700 rounded w-[130px] sm:w-[270px] "></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    </div>
                </div>
            </div>

            <div className="animate-pulse flex space-x-4 w-full sm:w-[670px] ">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    <div className="space-y-3">
                        <div className="flex justify-between gap-x-1 items-center w-full sm:w-[560px] ">
                            <div className="h-2 bg-slate-700 rounded w-[100px] sm:w-[270px] "></div>
                            <div className="h-2 bg-slate-700 rounded w-[100px] sm:w-[270px] "></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    </div>
                </div>
            </div>

            <div className="animate-pulse flex space-x-4 w-full sm:w-[670px] ">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    <div className="space-y-3">
                        <div className="flex justify-between gap-x-1 items-center w-full sm:w-[560px] ">
                            <div className="h-2 bg-slate-700 rounded w-[100px] sm:w-[270px] "></div>
                            <div className="h-2 bg-slate-700 rounded w-[100px] sm:w-[270px] "></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded w-full sm:w-[560px] "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;

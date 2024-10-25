'use client'

import Card from "./Card";
import { useRouter } from "next/navigation";

export default function Sec2() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/liveclass');
    };

    return (
        <div className="flex flex-col  gap-5 md:mb-0 mb-8">
            <h1 className="font-bold text-2xl text-[#3A3A3A]">Quick Links</h1>
            <div className="flex flex-col flex-wrap flex-shrink lg:max-w-md md:max-w-sm justify-center gap-5">
                <div
                    className={`cursor-pointer w-full md:max-w-sm h-22 rounded-2xl md:h-full p-0 md:py-10 md:px-5 transition-colors duration-300 bg-[#4749B3] shadow-md hover:bg-white text-white hover:text-[#4749B3]`}
                >
                    <div className="flex md:flex-col md:items-center md:justify-center h-full group">
                        <div className="w-1/4 md:w-full md:hidden flex md:bg-inherit bg-[#5F61C0] group-hover:bg-white items-center justify-center rounded-l-2xl">
                            <img src='notebook.png' className="w-8 h-8 md:w-6 md:h-6 group-hover:hidden" alt="logo" />
                            <img src='notebook-blue.png' className="w-8 h-8 md:w-6 md:h-6 hidden group-hover:block" alt="logo" />
                        </div>
                            <img src='notebook.png' className="w-8 h-8 md:w-6 md:h-6 md:block hidden group-hover:hidden" alt="logo" />
                            <img src='notebook-blue.png' className="w-8 h-8 md:w-6 md:h-6 hidden md:group-hover:block" alt="logo" />
                        <div className="flex flex-col justify-center text-left md:p-0 p-4 items-center md:items-center">
                            <p className="text-lg md:text-base lg:text-2xl font-bold">Canvas LMS</p>
                            <p className="text-sm md:block hidden md:text-xs text-center lg:text-base">Click here to access your LMS portal for assignments, class recordings and notes.</p>
                        </div>
                    </div>
                </div>

                <div
                onClick={handleClick}
                    className={`cursor-pointer w-full md:max-w-sm h-22 rounded-2xl md:h-full p-0 md:py-10 md:px-5 transition-colors duration-300 bg-[#E66DFF] shadow-md hover:bg-white text-white hover:text-[#E66DFF]`}
                >
                    <div className="flex md:flex-col md:items-center md:justify-center h-full group">
              <div className="w-1/4 md:w-full  md:hidden flex md:bg-inherit bg-[#EB87FF] group-hover:bg-white items-center justify-center rounded-l-2xl">
        <img src='liveclass.png' className="w-8 h-8 md:w-6 md:h-6 group-hover:hidden" alt="logo" />
        <img src='person-pink.png' className="w-8 h-8 md:w-6 md:h-6 hidden group-hover:block" alt="logo" />
               </div>
               <img src='liveclass.png' className="w-8 h-8 md:w-6 md:h-6 md:block hidden group-hover:hidden" alt="logo" />
                            <img src='person-pink.png' className="w-8 h-8 md:w-6 md:h-6 hidden md:group-hover:block" alt="logo" />
    <div className="flex flex-col justify-center text-left md:p-0 p-4 items-center md:items-center"> {/* Added items-center here */}
        <p className="text-lg md:text-base lg:text-2xl font-bold text-center">Join Live Class</p>
        <p className="text-sm md:block hidden md:text-xs text-center lg:text-base">Class 7 Math is starting in 1 hour, 35 minutes.</p>
    </div>
</div>
                </div>

                <div
                    className={`w-full md:max-w-sm cursor-pointer h-22 md:h-full rounded-2xl p-0 md:py-10 md:px-5 transition-colors duration-300 bg-[#6669FE] shadow-md hover:bg-white text-white hover:text-[#6669FE]`}
                >
                    <div className="flex md:flex-col md:items-center md:justify-center h-full group">
                        <div className="w-1/4 md:w-full md:hidden  flex md:bg-inherit bg-[#7E81FF] group-hover:bg-white items-center justify-center rounded-l-2xl"> 
                            <img src='whatsapp.png' className="size-10 md:w-6 md:h-6 group-hover:hidden" alt="logo" />
                            <img src='whatsapp-blue.png' className="size-10 md:w-6 md:h-6 hidden group-hover:block" alt="logo" />
                        </div>
                        <img src='whatsapp.png' className="w-8 h-8 md:w-6 md:h-6 md:block hidden group-hover:hidden" alt="logo" />
                            <img src='whatsapp-blue.png' className="w-8 h-8 md:w-6 md:h-6 hidden md:group-hover:block" alt="logo" />
                        <div className="flex flex-col justify-center text-left md:p-0 p-4 items-center md:items-center">
                            <p className="text-lg md:text-base lg:text-2xl font-bold">Contact Teacher</p>
                            <p className="text-sm md:block hidden md:text-xs text-center lg:text-base">Click here to contact your teacher for any doubts or concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

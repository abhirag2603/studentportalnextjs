'use client'

import React, { useState } from 'react';
import Modal from './Modal';
import VidModal from './VidModal';

export default function Sec3() {
    const [isModalsOpen, setIsModalsOpen] = useState(false);
    const [isVidModalOpen, setIsVidModalOpen] = useState(false);
    const [selectedWeek, setSelectedWeek] = useState('This week');
    const [selectedSubject, setSelectedSubject] = useState('All subjects');

    const handleWeekChange = (event: any) => {
        setSelectedWeek(event.target.value);
    };

    const handleSubjectChange = (event: any) => {
        setSelectedSubject(event.target.value);
    };

    const handleOpenModals = () => setIsModalsOpen(true);
    const handleCloseModals = () => setIsModalsOpen(false);
    const handleOpenVidModal = () => setIsVidModalOpen(true);
    const handleCloseVidModal = () => setIsVidModalOpen(false);

    return (
        <div >
            <p className="font-bold text-2xl lg:text-2xl text-[#3A3A3A]">Access Class Recordings</p>
            <div className="bg-white lg:max-w-md md:max-w-sm shadow-md rounded-3xl px-3 md:px-5 py-6 md:py-6">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src="/search-normal.png" alt="Search" className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                    </div>
                    <input type="text" className="block w-full p-2 pl-10 md:pl-12 text-gray-700 bg-gray-100 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Search for class recordings" />
                </div>
                <div className="flex flex-col md:flex-row justify-between pt-4">
                    <p className="text-black text-sm md:text-base flex items-center">Filter By:</p>
                    <div className="flex items-center mt-2 md:mt-0">
                        <select className="border rounded-md p-1 text-sm md:text-base" value={selectedWeek} onChange={handleWeekChange}>
                            <option value="This week">This week</option>
                            <option value="Last week">Last week</option>
                            <option value="Custom">Custom</option>
                        </select>
                        <select className="ml-2 border rounded-md p-1 text-sm md:text-base" value={selectedSubject} onChange={handleSubjectChange}>
                            <option value="All subjects">All subjects</option>
                            <option value="Math">Math</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                </div>
                <div>
                    {/* Class Recording Items */}
                    <div onClick={handleOpenModals} className="flex flex-row justify-between px-2 py-5 border-b border-gray-300 group cursor-pointer">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-0 max-w-72">
                                <p className="font-semibold md:text-sm lg:text-md text-customDarkBlue group-hover:text-customBlue">Class 7 Math</p>
                                <p className="font-bold md:text-md lg:text-lg text-black group-hover:text-customDarkBlue">Algebraic Equations</p>
                            </div>
                            <div>
                                <p className="flex flex-col justify-end text-gray-500 text-xs md:text-xs lg:text-sm">24th October, 2024</p>
                            </div>
                        </div>
                        <div className="relative h-16 w-20 md:h-16 md:w-24 mt-3 md:mt-0">
                            <img className="h-full w-full" src="Mask group.png" />
                            <img src="video-circle.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-xs md:text-sm whitespace-nowrap">Play now</p>
                        </div>
                    </div>

                    <div onClick={handleOpenModals} className="flex flex-row justify-between px-2 py-5 border-b border-gray-300 group cursor-pointer">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-0 max-w-72">
                                <p className="font-semibold md:text-sm lg:text-md text-customDarkBlue group-hover:text-customBlue">Class 7 Math</p>
                                <p className="font-bold  md:text-md lg:text-lg text-black group-hover:text-customDarkBlue">Inert Gases</p>
                            </div>
                            <div>
                                <p className="flex flex-col justify-end text-gray-500 text-xs md:text-xs lg:text-sm">24th October, 2024</p>
                            </div>
                        </div>
                        <div className="relative h-16 w-20 md:h-16 md:w-24 mt-3 md:mt-0">
                            <img className="h-full w-full" src="Mask group.png" />
                            <img src="video-circle.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-xs md:text-sm whitespace-nowrap">Play now</p>
                        </div>
                    </div>

                    <div onClick={handleOpenVidModal} className="flex flex-row justify-between px-2 py-5 border-b border-gray-300 group cursor-pointer">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-0 max-w-72">
                                <p className="font-semibold md:text-sm lg:text-md text-[#E66DFF] group-hover:text-[#F2B6FF]">Class 7 Science</p>
                                <p className="font-bold md:text-md lg:text-lg text-black group-hover:text-[#E66DFf]">Fundamentals of Organic Chemistry</p>
                            </div>
                            <div>
                                <p className="flex flex-col justify-end text-gray-500 text-xs md:text-xs lg:text-sm">24th October, 2024</p>
                            </div>
                        </div>
                        <div className="relative h-16 w-20 md:h-16 md:w-24 mt-3 md:mt-0">
                            <img className="h-full w-full" src="Mask group2.png" />
                            <img src="video-circle.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-xs md:text-sm whitespace-nowrap">Play now</p>
                        </div>
                    </div>
                </div>
                <div onClick={handleOpenModals} className="flex flex-row justify-between px-2 py-5 border-b border-gray-300 group cursor-pointer">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-0 max-w-72">
                                <p className="font-semibold md:text-sm lg:text-md text-customDarkBlue group-hover:text-customBlue">Class 7 Math</p>
                                <p className="font-bold  md:text-md lg:text-lg text-black group-hover:text-customDarkBlue">Trigonometry 101</p>
                            </div>
                            <div>
                                <p className="flex flex-col justify-end text-gray-500 text-xs md:text-xs lg:text-sm">24th October, 2024</p>
                            </div>
                        </div>
                        <div className="relative h-12 :w-16 lg:h-16 lg:w-24 mt-3 md:mt-0">
                            <img className="h-full w-full" src="Mask group.png" />
                            <img src="video-circle.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white text-xs md:text-sm whitespace-nowrap">Play now</p>
                        </div>
                    </div>
            </div>
           
            <Modal isOpen={isModalsOpen} onClose={handleCloseModals} />
            <VidModal isOpen={isVidModalOpen} onClose={handleCloseVidModal} imageSrc='Rectangle 1.png' />
        </div>
    );
}

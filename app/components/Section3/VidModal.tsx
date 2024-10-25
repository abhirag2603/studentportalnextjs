import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from "next/image";

interface VidModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VidModal: React.FC<VidModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            modalRef.current?.focus();

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                className="bg-[#4749B3] rounded-3xl max-w-[90%] max-h-[85%] w-full h-full flex flex-col"
            >
                <div className="flex-shrink-0 rounded-t-3xl flex items-center justify-center relative" style={{ height: '10%' }}>
                    <div className='grid text-center text-white'>
                        <p>Class 7 Science</p>
                        <p className='text-xl font-bold'>Fundamentals of Organic Chemistry</p>
                    </div>
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                <div className="rounded-3xl flex-grow flex flex-col items-center justify-center overflow-hidden relative">
                    <Image
                        src='Rectangle 1.png'
                        alt="Modal Content"
                        className="w-full h-full object-cover"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />

                    <div className="absolute bottom-20 right-20 text-white text-lg">
                        35:28 / 1:20:21
                    </div>

                    <div className="absolute bottom-16 left-0 right-0 flex justify-center mb-4">
                        <Image
                            src='/Group 2.png'
                            alt="Video Player Line"
                            width={900} // Use an approximate width since Next.js requires fixed width/height
                            height={500} // Adjust as needed to fit the container
                            className="object-contain w-[90%]"
                        />
                    </div>

                    <div className="absolute bottom-8 px-20 left-0 right-0 flex justify-between items-center">
                        <Image
                            src='/Group 1.png'
                            alt="Play"
                            width={112} // equivalent to w-28
                            height={40} // equivalent to h-10
                            className="cursor-pointer"

                        />
                        <div className='flex gap-3'>
                            <Image
                                src='/volume-cross.png'
                                alt="Sound"
                                width={40}
                                height={40}
                                className="cursor-pointer"
                            />
                            <Image
                                src='/Icon Frame.png'
                                alt="Fullscreen"
                                width={40}
                                height={40}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VidModal;

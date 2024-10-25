import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

interface VidModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const VidModal: React.FC<VidModalProps> = ({ isOpen, onClose, imageSrc }) => {
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
                    <img 
                        src={imageSrc} 
                        alt="Modal Content" 
                        className="w-full h-full object-cover" 
                    />
                    
                    <div className="absolute bottom-20 right-20 text-white text-lg">
                        35:28 / 1:20:21
                    </div>

                    <div className="absolute bottom-16 left-0 right-0 flex justify-center mb-4">
                        <img 
                            src='Group 2.png' 
                            alt="Video Player Line" 
                            className="w-[90%] object-contain" 
                        />
                    </div>

                    <div className="absolute bottom-8 px-20 left-0 right-0 flex justify-between items-center">
                        <img 
                            src='Group 1.png' 
                            alt="Play" 
                            className="w-28 h-10 cursor-pointer" 
                            onClick={() => console.log('Play clicked')} 
                        />
                        <div className='flex gap-3'>
                            <img 
                                src='volume-cross.png' 
                                alt="Sound" 
                                className="w-10 h-10 cursor-pointer" 
                                onClick={() => console.log('Sound clicked')} 
                            />
                            <img 
                                src='Icon Frame.png' 
                                alt="Fullscreen" 
                                className="w-10 h-10 cursor-pointer" 
                                onClick={() => console.log('Fullscreen clicked')} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VidModal;

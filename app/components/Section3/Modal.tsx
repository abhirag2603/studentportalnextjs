import React, { useEffect, useRef } from 'react';
import { FaBell } from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
                className="bg-white rounded-2xl md:p-6 pt-6 md:max-w-lg w-full text-center"
            >
                <div className='flex items-center justify-center gap-2'>
                    <FaBell color='#E66DFF' className='md:text-2xl text-lg' />
                    <p className="md:text-xl text-md text-[#E66DFF] font-semibold mb-0">
                        Class 7 Math is starting in 1 hour, 34 minutes.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl text-center">
                    <h2 className="md:text-2xl text-xl font-bold text-[#6669FE] mb-2">
                        You can join the live class 5 minutes before it starts. Please wait.
                    </h2>
                    <button
                        className="bg-[#6669FE] text-white px-4 py-2 rounded mt-4"
                        onClick={onClose}
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

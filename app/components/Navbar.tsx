import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="top-0 w-full h-[98px] bg-[#6669FE] flex items-center justify-between px-6 text-white z-50">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <Image 
                    src="/Logo.png" 
                    alt="Logo" 
                    className="md:h-[50px] md:w-[96px] w-[92px] h-[45px]" 
                    width={96} // Adjust width as needed
                    height={50} // Adjust height as needed
                />
            </div>

            {/* Title Section */}
            <div className="text-center text-xl md:text-3xl font-semibold">Student Portal</div>

            {/* User Info Section */}
            <div className="md:block hidden">
                <div className="text-lg">Hello, Gabrisa!</div>
                <div className="text-sm">Class 7, Math + Science</div>
            </div>
        </div>
    );
}

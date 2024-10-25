import Image from 'next/image';

export default function Announcements() {
    const announcements = [
        { id: 1, img: '/sun.png', message: 'On account of Independence Day, August 15th will be a holiday.' },
        { id: 2, img: '/clipboard-text.png', message: 'Reminder to finish your assignments and submit them by Monday.' },
    ];

    return (
        <div className="flex flex-col gap-4">
            <p className="font-bold text-2xl text-[#3A3A3A]">Announcements</p>
            <div className="bg-white rounded-[20px] flex flex-col lg:max-w-md md:max-w-sm shadow-md md:max-h-full max-h-24 overflow-hidden px-5 py-5 w-full">
                <div className="flex flex-col">
                    {announcements.map((announcement) => (
                        <div key={announcement.id} className="bg-[#F8F8F8] flex items-center justify-start gap-2 rounded-lg p-3">
                            <Image 
                                src={announcement.img} 
                                width={32} // Adjust width as needed
                                height={32} // Adjust height as needed
                                alt={`Announcement icon for: ${announcement.message}`} 
                            />
                            <p className="text-sm text-[#4749B3] text-left">{announcement.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

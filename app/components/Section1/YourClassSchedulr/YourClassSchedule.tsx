export default function YourClassSchedule() {
    const classes = [
        {
            id: 1,
            subject: 'Science',
            grade: 'Class 7',
            type: 'Live Class',
            day: 'Tuesday',
            date: 'Yesterday',
            time: '5:00 - 5:50 PM',
            accentL: '#9899DF',
            accentH: '#474B93',
            img: '/cam1.png', // Added forward slash for public folder
            bg: '#F8F8F8',
        },
        {
            id: 2,
            subject: 'Science',
            grade: 'Class 7',
            type: 'Live Class',
            day: 'Tuesday',
            date: 'Today',
            time: '6:30 - 7:15 PM',
            accentL: 'white',
            accentH: 'white',
            img: '/cam2.png', // Added forward slash for public folder
            bg: '#E66DFF',
        },
        {
            id: 3,
            subject: 'Science',
            grade: 'Class 7',
            type: 'Live Class',
            day: 'Tuesday',
            date: 'Tomorrow',
            time: '5:00 - 5:50 PM',
            accentL: '#9899DF',
            accentH: '#474B93',
            img: '/cam1.png', // Added forward slash for public folder
            bg: '#F8F8F8',
        },
        {
            id: 4,
            subject: 'Science',
            grade: 'Class 7',
            type: 'Live Class',
            day: 'Tuesday',
            date: '23rd Sept. 2024',
            time: '5:00 - 5:50 PM',
            accentL: '#EFABFD',
            accentH: '#E66DFF',
            img: '/cam3.png', // Added forward slash for public folder
            bg: '#F8F8F8',
        },
    ];

    return (
        <div className="flex flex-col flex-wrap w-full gap-2">
            <p className="font-bold text-2xl text-[#3A3A3A]">Your Class Schedule</p>
            <div className="bg-white rounded-[20px] flex flex-col lg:max-w-md md:max-w-sm px-5 shadow-md overflow-hidden md:max-h-full max-h-48 w-full">
                <div className="flex flex-col overflow-hidden">
                    {classes.map((classItem) => (
                        <div key={classItem.id} className="flex items-center px-2 rounded-lg py-4 w-full justify-between h-16 gap-2 mt-5" style={{ backgroundColor: classItem.bg }}>
                            <div className="flex flex-row items-center gap-2">
                                <img 
                                    src={classItem.img} 
                                    className="w-8 h-8 md:w-8 md:h-8" // Adjusted to standard Tailwind size classes
                                    alt={`${classItem.subject} class icon`} // Improved alt text
                                />
                                <div className="flex flex-col">
                                    <p className="md:text-sm text-xs" style={{ color: classItem.accentL }}>
                                        {classItem.grade}, {classItem.subject} | {classItem.type}
                                    </p>
                                    <p className="font-semibold text-xs md:text-md lg:text-md" style={{ color: classItem.accentH }}>
                                        {classItem.day}, {classItem.time}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="md:text-sm text-xs" style={{ color: classItem.accentL }}>
                                    {classItem.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

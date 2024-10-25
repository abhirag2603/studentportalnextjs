import Announcements from "./Announcements/Announcements";
import YourClassSchedule from "./YourClassSchedulr/YourClassSchedule"; // Corrected the import path

export default function Sec1() {
    return (
        <div className="flex flex-col justify-between w-full gap-5 p-4 md:p-6">
            <Announcements />
            <YourClassSchedule />
        </div>
    );
}

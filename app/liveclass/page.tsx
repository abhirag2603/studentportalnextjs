import Image from "next/image";

export default function Liveclass(){
    return (
        <div className="min-h-screen min-w-full flex items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center px-10 py-20 rounded-3xl bg-[#6F6F6F]">
                <Image src='/liveclass.png' alt="noclass" width={32} height={32} />
                <p className="text-white text-center text-3xl font-bold">No live classes</p>
                <p className="text-white text-center text-lg">You have no live classes scheduled for today.</p>
            </div>
        </div>
    );
}

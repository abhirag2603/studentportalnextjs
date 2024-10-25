export default function Card(props: any) {
    return (
        <div
            className={`w-full md:w-72 lg:w-80 h-44 md:h-36 lg:h-44 rounded-2xl p-4 md:p-3 lg:p-5 transition-colors duration-300 ${props.bg} shadow-md hover:bg-white text-white hover:${props.text}`}
        >
            <div className="flex flex-col items-center justify-center h-full group text-center">
                <img src={props.image} className="w-8 h-8 md:w-6 md:h-6 group-hover:hidden" alt="logo" />
                <img src={props.hoverimg} className="w-8 h-8 md:w-6 md:h-6 hidden group-hover:block" alt="logo" />
                <p className="text-lg md:text-base lg:text-2xl font-bold">{props.title}</p>
                <p className="text-sm md:text-xs lg:text-base">{props.content}</p>
            </div>
        </div>
    );
}

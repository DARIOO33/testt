export default function Card({number,title,category,date}) {
    // const ch = {}
    return (
        <>
            <div className="onecat flex">
            <div className="number text-5xl font-extrabold text-blue-950 ml-1">
                {number}
            </div>
            <div className="details ml-2">
                <div className="text text-xm text-blue-950 font-bold">
                    <a href="">
                    {title}
                    </a>
                </div>
                <span className="category text-gray-500 text-sm font-bold">
                    {category}
                </span>
                -
                <span className="date text-gray-500 text-sm font-bold">
                    {date}
                </span>
            </div>
           </div>
        </>
    )
};

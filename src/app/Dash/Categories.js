import "./Categories.css"
export default function Categories({ title, type }) {
    const catlist = [
        { id: 1, type: "Technology" },
        { id: 2, type: "Sport" },
        { id: 3, type: "Food" },
        { id: 4, type: "Travel" },
        { id: 6, type: "Music" }
    ]
    return (
        <>
            <div className="categorys ">
                <div className="title text-3xl font-bold text-blue-950">
                    {title}
                </div>
                <ul className="mt-4">
                    {catlist.map((type => {
                        return (
                            <li key={type.id} className="mt-2"><a href={"/"+(type.type).toLowerCase()} className="option text-blue-950 text-xm font-semibold">{type.type}</a></li>
                        )
                    }))}
                </ul>
            </div>
        </>
    )
};

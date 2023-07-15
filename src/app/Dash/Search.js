import './search.css'
import Image from 'next/image'
import search from '../../assets/search.png'
export default function Search() {
    return (
        <>
            <div className="search mt-4">
                <div className="red  h-14   sr ">
                    <input type="text" name="" id="" placeholder="Search..." className=" rounded-3xl h-12  border-none" />
                    <Image 
                    src={search} 
                    alt ="Search "/>
                </div>
            </div>
        </>
    )
};

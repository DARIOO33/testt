"use client"
import { Link } from 'next/link';


import './header.css'
export default function Header () {
    const handleClick = () => {
        redirect('/');
      };

    return (
        <>
               <header className="justify-between flex  items-center bg-white " >
                    <div className="title text-2xl ml-16 font-extrabold">
                        My-Blog
                    </div>
                    <ul className="flex mr-16">
                        <li className="p-5 text-lg font-bold"><a href="/">Home</a></li>
                        <li className="p-5 text-lg font-bold"><a href="/more">Blogs</a></li>
                        <li className="p-5 text-lg font-bold"><a href="#">Left Sliderbar</a></li>
                    </ul>
                </header>      
        </>
    )
}
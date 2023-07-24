"use client"
import Link  from 'next/link';

import './header.css'
export default function Header() {
    function slidetoggle (){
        document.querySelector('.dash').classList.toggle('hidden')
        try{

            document.querySelector('.dashc').classList.toggle('hd')
            document.querySelector('.blogc').classList.toggle('focus')
        }
        catch{
            console.log("not in a blog section");
        }
    }
    function toggle (){
        document.querySelector('header ul').classList.toggle('active')
       
}

    

    return (
        <>

            <header className=" bg-white justify-between " >
                <div className="lines" onClick={toggle}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="title text-2xl ml-16 font-extrabold">
                    My-Blog
                </div>
                <ul className=" mr-16">
                    <li className="p-5 text-lg font-bold"><Link href="/">Home</Link></li>
                    <li className="p-5 text-lg font-bold"><Link href="/about">About</Link></li>
                    {/* <li className="p-5 text-lg font-bold"><a href="/more">Blogs</a></li> */}
                    <li className="p-5 text-lg font-bold"><a onClick={slidetoggle} className='cursor-pointer'>Left Sliderbar</a></li>
                </ul>
            </header>
        </>
    )
}
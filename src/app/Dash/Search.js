"use client"
import './search.css'
import Icon from './Icon.jsx'
import Image from 'next/image'
import search from '../../assets/search.png'
export default function Search() {
   


    const url = window.location.href
    const equal = url.indexOf("=")
    const searched = url.substring(equal+1,url.length)
    
   
    try{
        if(equal!=-1){
            document.querySelector('input').value=searched
        }
    }
    catch{
        console.log("can't");
    }
    return (
        <>
            <div className="search mt-4">
                <div className="red  h-14   sr ">
                    <input type="text" name="" id="input"  placeholder="Search..." className=" rounded-3xl h-12  border-none" />
                    <Icon />
                    {/* <p onClick={window.location.href="/results"}> */}
                   
                    {/* <Image 
                    src={search} 
                    alt ="Search"
                    
                    /> */}
                    {/* </p> */}
                </div>
            </div>
        </>
    )
};

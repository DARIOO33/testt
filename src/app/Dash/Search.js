"use client"
import './search.css'
import Icon from './Icon.jsx'
import Image from 'next/image'
import search from '../../assets/search.png'
export default function Search() {
   
    
    
    
   
  
    return (
        <>
            <div className="search mt-4">
                <div className="red  h-14   sr ">
                    <input  type="text" name="" id="input"  placeholder="Search..." className=" rounded-3xl h-12  border-none" />
                    <Icon />
                   
                </div>
            </div>
        </>
    )
};

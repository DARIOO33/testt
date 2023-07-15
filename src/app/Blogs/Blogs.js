'use client'
import Search from '../Dash/Search'
import './blogs.css'
import bardimg from '../../assets/bard.jpg'
import microsoft from '../../assets/microsoft.jpg'
import { useState } from 'react';
import Link from 'next/link'
import Card from '../Card/Card'
import img from '../../assets/img.jpeg'
export default function Blogs({ ppp, blogs, blogz }) {

    const array = blogs.arr

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState((ppp))
    const lasPostIndex = currentPage * postsPerPage
    const firtsPostIndex = lasPostIndex - postsPerPage
    const currentPosts = array.slice(firtsPostIndex, lasPostIndex)
    function nextPage() {
        window.scrollTo(0, 0);
        // console.log(currentPage);

        setCurrentPage(currentPage + 1)
    }
    function prevPage() {
        window.scrollTo(0, 0);
        // console.log(currentPage);
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <div className="blogs" style={{}}>

            <div className="searchh">
                <Search />
            </div>
            <div className="card-container">


                {currentPosts.map(card => {
                    return (

                        <Card id={card.id} title={card.title} key={card.id} desc={card.desc} image={card.image} details={card.details} />

                    )
                })}







            </div>

            <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded-l" onClick={prevPage}>
                    Prev
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded-r" onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    )
};

"use client"
import './Content.css'
import Dash from '../Dash/Dash.jsx'
import Blogs from '../Blogs/Blogs.js'
import { useState } from 'react'
export default function Content ({ arr }) {
    var filteredResults;
    const [results, setResults] = useState(arr);
    function test(){
        const input = document.getElementById('input').value
        filteredResults = arr.filter((result) => {
            return result.title.toLowerCase().includes(input.toLowerCase());
          })

   
    setResults(filteredResults)
          
        

        
    }


    return (
        <div>
            <div className="content" onChange={test}>
                <Dash  />
                <Blogs ppp='6' blogs = {results}/>
            </div>
        </div>
    )
}
'use client'

import './blogs.css'
import bardimg from '../../assets/bard.jpg'
import microsoft from '../../assets/microsoft.jpg'
import { useState  } from 'react';
import Link from 'next/link'
import Card from '../Card/Card'
import img from '../../assets/img.jpeg'
export default function Blogs({ppp}) {

    const Cards = [
        { id:1, title : "Intelligence artificielle : Google lance Bard en réponse à ChatGPT" ,  desc : "Bard est maintenant disponible dans la plupart des pays du monde et dans les langues les plus parlées », a indiqué dans un post de blog Google, qui avait présenté en février cet outil pour répondre à ChatGPT, le logiciel phare d’OpenAI financé principalement par Microsoft. « Nous avons collaboré de manière proactive avec des experts, des décideurs et des régulateurs pour mener cette expansion », a précisé Google." ,details : "13/07/2023" , image : bardimg },
        { id: 2, title: "Microsoft a été piraté : des hackers chinois ont espionné les mails de plusieurs comptes Outlook", desc: "Microsoft a été victime d’un piratage. En exploitant une faille dans Azure, des pirates venus de Chine sont parvenus à pénétrer au sein de plusieurs comptes Outlook. Les cybercriminels ont notamment pu espionner toutes les conversations de plusieurs agences du gouvernement américain.", details: "13/07/2023", image: microsoft },
        
        { id:3, title : "Title 3" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:4, title : "Title 4" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:5, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:6, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:7, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:8, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:9, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:10, title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },

    ]
    const [currentPage , setCurrentPage ]= useState(1) 
    const [postsPerPage , setPostsPerPage ] = useState((ppp)) 
    const lasPostIndex =  currentPage * postsPerPage
    const firtsPostIndex = lasPostIndex - postsPerPage
    const currentPosts = Cards.slice(firtsPostIndex,lasPostIndex)
    function nextPage (){
        window.scrollTo(0, 0);
        console.log(currentPage);
       
        setCurrentPage(currentPage+1)
    }
    function prevPage (){
        window.scrollTo(0, 0);
        console.log(currentPage);
        if (currentPage > 1) {
            setCurrentPage(currentPage-1)
        }
    }
    return (
        <div className="blogs" style={{width : "65%"}}>
            <div className="card-container">
               {currentPosts.map(card => {
                return (
                    
                <Card id={card.id} title={card.title} key = {card.id} desc = {card.desc} image = {card.image} details = {card.details}/>
                    
                )
               })}
              
              

              
              
              
              
            </div>

        </div>
    )
};

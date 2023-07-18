"use client"
// import { useState } from "react";
import Header from '../Header/Header'
import Main from '../main/Main'
import Content from '../Content/Content'
import bardimg from '../../assets/bard.jpg'
import microsoft from '../../assets/microsoft.jpg'
import Link from 'next/link'
import Card from '../Card/Card'
import worm from '../../assets/worm.jpg'
import tennis from '../../assets/tennis.jpg'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

import img from '../../assets/img.jpeg'
export default function page () {

    

  
    const array = [
        { id:1, category :"Technology" , title : "Intelligence artificielle : Google lance Bard en réponse à ChatGPT" ,  desc : "Bard est maintenant disponible dans la plupart des pays du monde et dans les langues les plus parlées », a indiqué dans un post de blog Google, qui avait présenté en février cet outil pour répondre à ChatGPT, le logiciel phare d’OpenAI financé principalement par Microsoft. « Nous avons collaboré de manière proactive avec des experts, des décideurs et des régulateurs pour mener cette expansion », a précisé Google." ,details : "13/07/2023" , image : bardimg },
        { id:2, category :"Technology" , title: "Microsoft a été piraté : des hackers chinois ont espionné les mails de plusieurs comptes Outlook", desc: "Microsoft a été victime dun piratage. En exploitant une faille dans Azure, des pirates venus de Chine sont parvenus à pénétrer au sein de plusieurs comptes Outlook. Les cybercriminels ont notamment pu espionner toutes les conversations de plusieurs agences du gouvernement américain.", details: "13/07/2023", image: microsoft },
        { id:3, category :"Technology" , title : "WormGPT tool for criminals discovered by cybersecurity firm" ,  desc : "A cybersecurity firm has discovered a new generative artificial intelligence tool called WormGPT , that is being sold to criminals as another firm has created a malicious generative AI tool called PoisonGPT to test how the technology can be used to intentionally spread fake news online. Photo courtesy of SlashNext" ,details : "NOV 17 2020" , image : worm },
        { id:4, category :"Sport" , title : "Wimbledon: Marketa Vondrousova shocks Ons Jabeur to win her maiden Grand Slam" ,  desc : 'Vondrousova climbed up the stands Pat Cash-style to hug her team in the players box, while Jabeur sat disconsolately in her chair. She said: "I dont know whats happening now. Ons, congratulations, youre such an inspiration for all of us, I hope you are going to win one day. "After everything Ive been through - I had a cast on this time last year - and now I cant believe Im holding this trophy."' ,details : "JULY 16 2023" , image : tennis },
        { id:5, category :"Sport" , title : "Sport test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:6, category :"Food" , title : "Food test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:7, category :"Food" , title : "Food test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:8, category :"" , title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:9, category :"" , title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
        { id:10, category :"" , title : "Title test" ,  desc : "Lorem ipsum dolor sit amet consectetur." ,details : "NOV 17 2020" , image : img },
    
    ]
    const url = window.location.href
    const equal = url.indexOf("=")
    const search = url.substring(equal+1,url.length)
    console.log(search);
    // const [results, setResults] = useState(array);
    const filtredArray=array.filter((result => {
    return result.title.toLowerCase().includes(search.toLowerCase())
  }))
  

  return (
    <div>
        <Main>
            <Header/>
            <Content arr = {filtredArray}/>
        </Main>
      <input
      id="searchquery"
        type="text"
        placeholder="Search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
     
    </div>
  );  
  
};

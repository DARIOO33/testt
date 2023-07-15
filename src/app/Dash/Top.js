import './top.css'
import Card from './Card.js'
export default function Top({title}) {
    const topPosts = [
        {id : 1 , title:"Aenean mattisg tortor ac sapen congue molestie" , category :"FOOD"  , date : "Nov 17,2020"},
        {id : 2 , title:"Vestibulumante ipsum primis in orci faucibus luctus" , category :"Music" , date : "Nov 17,2020"},
        {id : 3 , title:"Vestibulumante ipsum primis in orci faucibus luctus" , category :"FOOD" , date : "Nov 17,2020"},
        {id : 4, title:"Vestibulumante ipsum primis in orci faucibus luctus" , category :"CULTURE" , date : "Nov 17,2020"},
        {id : 5, title:"Vestibulumante ipsum primis in orci faucibus luctus" , category :"FOOD" , date : "Nov 17,2020"},
    ]
    return (
        <>
        <div className="categorys ">
            <div className="title text-3xl font-bold text-blue-950">
                {title}
            </div>
            <div className="post-cont mt-4">

        {topPosts.map((post => {
            return (
                <Card key={post.id} number ={post.id} title = {post.title} category = {post.category} date ={post.date} />
                
                )
            }))}
            </div>
  

        </div>
        </>
    )
};

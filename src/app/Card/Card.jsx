import Image from 'next/image'
import Link from 'next/link'
// import img from '../../assets/img.jpeg'
import './card.css'
export default function Card({title,details,desc,image,id}) {
    // console.log({id});
    const link = 'blog/'+id
    console.log(link);
    return (
        <>
        <a href={link}>
        <div className="card mt-4">
          <div className="image">
          <Image
          src= {image}
          alt="Picture of the author"
        
          
          />
            </div>  
            <div className="text p-2 ">
                <div className="details text-gray-400 text-xs ">
                    {details}
                </div>
                <div className="title text-xl font-bold">
                    {title}
                </div>
                <div className="desc text-gray-500 text-sm">
                    {desc}
                </div>
            </div>
        </div>
        </a>
        </>

    )
};

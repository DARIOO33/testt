import Image from 'next/image'
import Link from 'next/link'
// import img from '../../assets/img.jpeg'
import './card.css'
export default function Card({title,details,desc,image,id,category}) {
    var string = desc
    var point = string.indexOf(".")
    var comma = string.indexOf(",")
    let newString;
    newString = string.substr(0,comma)+"..."

    const link = 'blog/'+id
    return (
        <>
        <Link href={link}>
        <div className="card mt-4">
          <div className="image">
          <Image
          src= {image}
          alt={title}
        
          
          />
            </div>  
            <div className="text p-2 ">
                <span className="details text-gray-400 text-xs font-semibold">
                    {category}
                </span>
                 <span className='text-gray-500 text-s font-semibold ml-2'>•</span>
                <span className='details text-gray-400 text-xs ml-2'>
                {details}
                </span>
                <div className="title text-xl font-bold">
                    {title}
                </div>
                <div className="desc text-gray-500 text-sm">
                    {newString}
                </div>
            </div>
        </div>
        </Link>
        </>

    )
};

import Header from '../Header/Header'
import Blogs from '../Blogs/Blogs'
import Main from '../main/Main'
import './more.css'
export default function Page(params) {
    return (
        <>
        <Main>

        <Header/>
        <div className="containerr m-auto ">

        <Blogs ppp="8"/>
        </div>
        </Main>
        </>
    )
};

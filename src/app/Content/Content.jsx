import './Content.css'
import Dash from '../Dash/Dash.jsx'
import Blogs from '../Blogs/Blogs.js'
export default function Content ({arr}) {
    const array = {arr};
    // console.log({array});
    return (
        <div>
            <div className="content">
                <Dash  />
                <Blogs ppp='6' blogs = {array}/>
            </div>
        </div>
    )
}
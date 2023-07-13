import './Content.css'
import Dash from '../Dash/Dash.jsx'
import Blogs from '../Blogs/Blogs.js'
export default function Content () {
    return (
        <div>
            <div className="content">
                <Dash/>
                <Blogs ppp='6' />
            </div>
        </div>
    )
}
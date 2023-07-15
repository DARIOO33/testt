import './dash.css'
import Search from './Search.js'
import Top from './Top.js'
import Categories from './Categories.js'
export default function Dash ()  {
  return (
    <div className='dash '>
      <div className="dash-content w-3/4 ml-8">
      <div className="search-container">
        <Search/>
      </div>
      <div className="catalog-container bg-white mt-10 rounded-2xl p-6  m-auto">
        <Categories
        title ="Categories"
        type ="ul"/>
      </div>
      <div className="catalog-container bg-white mt-10 rounded-2xl p-6  m-auto">
      <Top
      title ="Top Posts"
      type ="ol"/>

      </div>
      </div>
    </div>
  )
}

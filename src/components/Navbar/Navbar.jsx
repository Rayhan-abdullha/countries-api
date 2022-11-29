import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar({searchData}) {
  const [search, setSearch] = useState("")
  useEffect(() => {
    searchData(search)
  }, [search])
  return (
    <div className='container navabar'>
       <div className="row menu">
       <div className='col-xl-3 col-md-3 logo'>
            <h4 onClick={() => setSearch("")}><Link to='/'>Countries</Link></h4>
        </div>
        <nav className='col-xl-9 col-md-9 d-flex justify-content-end'>
            <ul className='listMenu d-flex'>
                <li onClick={() => setSearch("")}><Link to="/">Home</Link></li>
                <li><Link to="/blog">About</Link></li>
            </ul>
            <div className='searchInput'>
              <input onChange={(e) => setSearch(e.target.value)} className='search' type="text" value={search} placeholder="Search"/>
            </div>
        </nav>
       </div>
    </div>
  )
}

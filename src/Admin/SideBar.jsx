import React from 'react'
import './sideBar.css'
import {Link, NavLink} from 'react-router-dom'
function SideBar() {
    return (
        <div className="sidebar">
            <h1 style={{color: "#fff", padding: ".5em"}}><Link to="/">WHEY</Link></h1>
            <ul className="nav">
                <li><NavLink to="/dashboard">Dashboard </NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
                <li><NavLink to="/something">HEHHEE</NavLink></li>
            </ul>
        </div>
    )
}

export default SideBar

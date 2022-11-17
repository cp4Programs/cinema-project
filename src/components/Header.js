import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <Link className="logo" to="/">CineTrail</Link>
            <div className="search-container">
                <input className="search-input" placeholder="Search Movies" />
            </div>
            <div className="header-buttons-container">
                <button className="theme-button-container">Create and Account</button>
            </div>
        </div>

    );
}

export default Header
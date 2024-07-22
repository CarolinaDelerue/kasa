import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/component/_navbar.scss'

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="/logo.svg" alt="Logo" />
            </div>
            <div className="navbar_links">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </nav>
    )
}

export default Navbar

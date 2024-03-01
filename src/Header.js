import React from 'react';
import icon from './assets/fc.webp'
import "./header.css"
function Header({ toggleMenu }) {
    return (
        <header>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={icon} width={170} />
                <h1>KFC</h1>
            </div>
            <nav className='nav-container'>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="menu" onClick={toggleMenu}>Menu</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
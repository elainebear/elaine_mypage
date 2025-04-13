import './App.css'
import './index.css'
import { HashRouter, BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import { useState } from 'react'



function Header() {
    const [isActive, setIsActive] = useState(false);
    const closeMenu = () => {
        setIsActive(false);
    };
    return (
        < header>
            <div className="container-header">
                <h3 className="logo">
                    <Link to="/" onClick={closeMenu}> Elaine </Link>
                </h3>
                <button className="menu-toggle" onClick={() => setIsActive(!isActive)}>&#9776;</button>
                <nav className={isActive ? "active" : ""}>
                    <NavLink to="/" onClick={closeMenu} > Home </NavLink>
                    <NavLink to="/articles" onClick={closeMenu}> Artcles </NavLink>
                    <NavLink to="/collections" onClick={closeMenu}> Collections </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;

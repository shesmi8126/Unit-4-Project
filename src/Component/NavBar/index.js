import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import navData from '../../server/NavLinks'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.navLinks = navData.map(link =>
            <div className="NavBar--link">
                <NavLink to={link.to}>{link.text}</NavLink>
            </div>
        );
    }

    render() {
        return (
            <nav className="NavBar">
                <div className="NavBar--header">Products</div>
                {this.navLinks}
            </nav>
        );
    }
}

export default NavBar
import React from 'react';
import './Header.css'
import logo from '../../static/media/logo.png'
import cart from '../../static/media/cart.png'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="Header--logo">
                    <img src={logo}></img>
                </div>
                <div className="Header--storeInfo">
                    <div className="Header--storeInfo--name">My STORE: Micro Center Web Store</div>
                    <div>
                        <a href="#">Store Info</a> | <a href="#">Change</a>
                    </div>
                </div>
                <div className="Header--signIn">
                    <a href="#">Sign In</a>/<a href="#">Register</a>
                </div>
                <div className="Header--cart">
                    <img src={cart}></img>
                </div>
            </header>
        );
    }
}

export default Header
import React from 'react';

import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src ={logo} alt='logo'/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/order">order review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
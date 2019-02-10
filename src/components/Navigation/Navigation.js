import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/user">Account</NavLink>
        </nav>
    );
};

export default Navigation;
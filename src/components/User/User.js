import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignInForm from './Forms/SignInForm';
import SignUpForm from './Forms/SignUpForm';
import './Signup.css';

const User = () => {
    return (
        <div className="App__Signup">
            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink to="/user/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink to="/user/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/user/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/user/signup" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <Route path="/user/signup" component={SignUpForm} />
                <Route path="/user/signin" component={SignInForm} />
            </div>
        </div>
    );
};

export default User;
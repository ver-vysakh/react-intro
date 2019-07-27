import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './header.css';

class Header extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/first">First</Link>
                    </li>
                    <li>
                        <Link to="/second">Second</Link>
                    </li>
                    <li>
                        <Link to="/third">Third</Link>
                    </li>
                </ul>
            </Router>
        );
    }
}

export default Header;

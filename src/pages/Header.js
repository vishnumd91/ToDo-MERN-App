import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to='/' className="nav-link">ToDos <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link to='/create' className="nav-link">Create ToDo</Link>
            </li>
            </ul>
            </nav>
        </div>
    )
}

export default Header

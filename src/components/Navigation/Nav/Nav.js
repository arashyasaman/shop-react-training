import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
    return (
        <li className="nav-item">
            <Link to={props.link}>{props.children}</Link>
        </li>
    )
}

export default Nav;
import React from 'react'
import './Nav.css'

const Nav = (props) => {
    return (
        <li className="nav-item">
            <a href={props.link}>{props.children}</a>
        </li>
    )
}

export default Nav;
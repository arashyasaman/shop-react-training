import React from 'react'
import Nav from '../Nav/Nav';
import './NavItems.css'

const NavItems = (props) => {
    return (
        <ul className="nav-items">
            <Nav link="/">خانه</Nav>
            <Nav link="/">محصولات</Nav>
        </ul>
    )
}

export default NavItems;
import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink exact className="nav-bar-link" to="/">
                Store
            </NavLink>
            <NavLink className="nav-bar-link" to="/add-product">
                Add Product
            </NavLink>
        </div>
    )
}

NavBar.propTypes = {
    prop1: PropTypes.any
}


export default NavBar;
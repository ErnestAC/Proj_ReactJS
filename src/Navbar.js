import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo"

const Navbar = () => {
    return (
        <nav className="navbar">
        <BrandLogo />
        <div className="navbar-center">
            <ul className="nav-links">
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
                <CartWidget cartItemCount={7}/>
        </div>
        </nav>
    );
};

export default Navbar;

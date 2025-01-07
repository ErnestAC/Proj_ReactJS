import React from "react";
import "bulma/css/bulma.css";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <BrandLogo titleTienda={"SHOPNHOUR"} />
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/products">
              Products
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/prebuilts">
                Pre-built models
              </a>
              <a className="navbar-item" href="/blueprints">
                Blueprints
              </a>
              <a className="navbar-item" href="/specials">
                Special editions
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/contact">
                User submissions
              </a>
            </div>
          </div>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
        </div>

        <div className="navbar-right">
          <a href="/cart" className="navbar-item">
            <CartWidget cartItemCount={3} />
          </a>
          <a href="/user" className="navbar-item">
            <UserWidget AlertCount={0} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo"

const Navbar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <BrandLogo titleTienda={"SHOPNHOUR"}/>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
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
            <a className="navbar-item" href="/products">
              Contact
            </a>
            <a className="navbar-item" href="/products">
              About
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="navbar-right">
                  <CartWidget cartItemCount={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;

// not code import { FaBellConcierge } from "react-icons/fa6";
import favicon from "../img/favicon.png"

function BrandLogo({titleTienda}) {
  return (
    <div className="navbar-left">
      <div className="navbar-right">
        <div className="logo-image">
          <img src={favicon} alt="SHOPNHOUR Logo" className="logo" />
        </div>
        <div className="logo-text">
          {titleTienda}
        </div>
      </div>
    </div>
  );
}

export default BrandLogo;
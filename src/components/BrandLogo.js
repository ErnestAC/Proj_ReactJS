// not code import { FaBellConcierge } from "react-icons/fa6";

function BrandLogo({titleTienda}) {
  return (
    <div className="navbar-left">
      <div className="logo">
          {titleTienda}
      </div>
    </div>
  );
}

export default BrandLogo;
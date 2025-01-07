import { FaUser } from "react-icons/fa"

// import "../css/CartWidget.css";

function UserWidget({ AlertCount }) {

  return (
    <div>
      <FaUser size={23} />
      <a href="/user" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="cart-count">{AlertCount}</div>
      </a>
    </div>
  );
}

export default UserWidget;

import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget({ cartItemCount }) {
  return (
    <div>
      <FaShoppingCart size={24} />
      <a href="/cart" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="cart-count">{cartItemCount}</div>
      </a>
      <a href="/account" className="user-icon">
        <i className="fas fa-user"></i>
      </a>
    </div>
  );
}

export default CartWidget;

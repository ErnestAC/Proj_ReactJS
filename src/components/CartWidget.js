import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ cartItemCount }) => {
  

  return (
    <div>
      <FaShoppingCart size={23} />
      <a href="/cart" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <div className="cart-count">{cartItemCount}</div>
      </a>
    </div>
  );
}

export default CartWidget;

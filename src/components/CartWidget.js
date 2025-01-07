import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from 'react'

const CartWidget = ({ cartItemCount }) => {
  
  const [count, setCount] = useState(0) //Use default value 0

  useEffect(() => {
    console.log("AAAAA", cartItemCount)
  })

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

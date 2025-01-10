import React, { useState } from "react";
import "bulma/css/bulma.css";
// NOT CODE import { FaPlusCircle } from "react-icons/fa";
// NOT CODE { FaShoppingCart } from "react-icons/fa";

const ItemCount = ({ stock, initial }) => {
const [count, setCount] = useState(initial);

const handleAdd = (quantity) => {
console.log(`Added ${quantity} item(s) to cart.`);
};

const increment = () => {
    if (count < stock) {
        setCount(count + 1);
    }
};

const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
};

    return (
    <div className="item-counter-container">
        <div className="item-counter">
            <button className="button" onClick={decrement} disabled={count <= 0}>
                -
            </button>
            <span className="item-counter">
                {count} / {stock}
            </span>
            <button
                className="button"
                onClick={increment}
                disabled={count >= stock}
            >
                +
            </button>

            
            <button
                className="button"
                onClick={() => handleAdd(count)}
                disabled={stock === 0}
            >
                Add to cart
            </button>
            
            
        </div>
    </div>
    );
};

export default ItemCount;

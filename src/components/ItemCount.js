import React, { useState } from "react";
import "bulma/css/bulma.css";

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
    if (count > 1) {
        setCount(count - 1);
    }
    };

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
        }}
        >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="button" onClick={decrement} disabled={count <= 1}>
            -
            </button>
            <span>{count}</span>
            <button
            className="button"
            onClick={increment}
            disabled={count >= stock}
            >
            +
            </button>
        </div>
        <button
            className="button"
            onClick={() => handleAdd(count)}
            disabled={stock === 0}
        >
            Add to cart
        </button>
        <p></p>
        </div>
    );
};

export default ItemCount;

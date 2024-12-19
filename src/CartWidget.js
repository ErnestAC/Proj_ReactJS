import "./CartWidget.css";

function CartWidget({cartItemCount}) {

    return (
        <div className="navbar-right">
        <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartItemCount}</span>
        </a>
        <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
        </a>
        </div>
    );
}

export default CartWidget;
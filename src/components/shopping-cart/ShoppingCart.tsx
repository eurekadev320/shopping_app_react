import React, { FC } from "react";
import "./ShoppingCart.scss";
import { ShoppingContext } from "../../contexts/ShoppingContext";
import { Product as ProductModel } from "../../model/product";
import { Types } from "../../reducers/ShoppingReducer";

const ShoppingCart: FC = () => {
  const { state, dispatch } = React.useContext(ShoppingContext);
  const { products } = state;

  const removeFromCart = (product: ProductModel) => {
    dispatch({ type: Types.REMOVE_FROM_CART, payload: product });
  };

  let arr_amount = products.map((product) => product.quantity * product.price);

  let total_amount: number = arr_amount.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-arrow">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H17M17 7L11 1M17 7L11 13"
              stroke="#02A0F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="space"></div>
        <div className="cart-title">Your Cart</div>
        <div className="space"></div>
        <div className="menu-button">
          <div className="menu-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.67004 6H23L21.3199 14.39C21.1299 15.3402 20.2899 16.0186 19.3199 16H8.75C7.74 16.0086 6.88 15.262 6.75 14.26L5.22998 2.74C5.09998 1.7456 4.25 1.0015 3.25 1H1M8 23C9.1 23 10 22.1046 10 21C10 19.8954 9.1 19 8 19C6.9 19 6 19.8954 6 21C6 22.1046 6.9 23 8 23ZM20 23C21.1 23 22 22.1046 22 21C22 19.8954 21.1 19 20 19C18.9 19 18 19.8954 18 21C18 22.1046 18.9 23 20 23Z"
                stroke="#777777"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="menu-text">Cart</div>
        </div>
      </div>
      <div className="cart-item-list">
        {products.map((product) => (
          <div className="cart-item" key={product.productId.value}>
            <div className="cart-item-img">
              <img src={product.imageUrl} alt="product" />
            </div>
            <div className="cart-item-name">{product.name}</div>
            <div className="cart-item-quantity">{product.quantity}</div>
            <div className="cart-item-price">
              ${(product.price / 100).toFixed(2)}
            </div>
            <div className="cart-item-total">
              ${`${((product.quantity * product.price) / 100).toFixed(2)}`}
            </div>
            <div
              className="cart-item-remove"
              onClick={() => {
                removeFromCart(product);
              }}
            >
              Remove
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart-total">
        <h3>Total amount for payment</h3>
        <h3>{`$${(total_amount / 100).toFixed(2)}`}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;

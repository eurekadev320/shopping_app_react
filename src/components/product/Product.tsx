import React, { FC } from "react";
import "./Product.scss";
import { Product as ProductModel } from "../../model/product";
import { ShoppingContext } from "../../contexts/ShoppingContext";
import { Types } from "../../reducers/ShoppingReducer";

interface ProductProps {
  product: ProductModel;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { dispatch } = React.useContext(ShoppingContext);

  const addToCart = (product: ProductModel) => {
    dispatch({ type: Types.ADD_TO_CART, payload: product });
  };

  return (
    <div className={"product-container"}>
      <img src={product.imageUrl} alt="product" className="product-img" />
      <h1 className="product-title">{product.name}</h1>
      <h3 className="product-price">${(product.price / 100).toFixed(2)}</h3>
      <div
        className="product-addcart-btn"
        onClick={() => {
          addToCart(product);
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.60001 3H5.39999V5.39999H3V6.60001H5.39999V9H6.60001V6.60001H9V5.39999H6.60001V3ZM6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.20001 6 1.20001C8.646 1.20001 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8Z"
            fill="#38C2DE"
          />
        </svg>
        Add to Cart
      </div>
    </div>
  );
};

export default Product;

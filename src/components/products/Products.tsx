import React, { FC, useEffect, useState } from "react";
import "./Products.scss";
import { Product as ProductModel } from "../../model/product";
import { ProductService } from "../../service/product.service";
import Product from "../product/Product";
import { CATEGORY_LIST } from "../../utils";

interface ProductsProps {
  productService: ProductService;
}

const Products: FC<ProductsProps> = ({ productService }) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setProducts(productService.getProducts());
  }, [productService]);

  return (
    <div className="products-list">
      <div className="category-list-container">
        <div className="category-title">Shop by category</div>
        <div className="category-list">
          {CATEGORY_LIST.map((category) => (
            <div
              className="category-item"
              key={category}
              onClick={() => {
                setCategory(category);
              }}
            >
              {category}
            </div>
          ))}
          <div className="category-item-addon">
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33301 2.66701H0.333008V4H8.33301V2.66701ZM8.33301 0H0.333008V1.33299H8.33301V0ZM0.333008 6.66701H5.66699V5.33299H0.333008V6.66701ZM13.333 3.66701L14.333 4.66701L9.67297 9.33299L6.66699 6.33299L7.66699 5.33299L9.67297 7.33299L13.333 3.66701Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="products-container">
        {products
          .filter((p) => {
            if (!category || (category && category == p.category)) {
              return true;
            }
          })
          .map((product) => (
            <Product key={product.productId.value} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;

import Header from "./components/header/Header";
import { ProductService } from "./service/product.service";
import Products from "./components/products/Products";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import { ShoppingProvider } from "./contexts/ShoppingContext";
import "./App.scss";

const productService = new ProductService();

const App = () => {
  return (
    <div className="app">
      <ShoppingProvider>
        <div className="left-container">
          <div className="header-container">
            <Header />
          </div>
          <div className="products-list-container">
            <Products productService={productService} />
          </div>
        </div>
        <div className="right-container">
          <ShoppingCart />
        </div>
      </ShoppingProvider>
    </div>
  );
};

export default App;

import { Product } from "../model/product";
import products from "../utils/products.json";

export class ProductService {
  getProducts(): Product[] {
    return products.map((p) => {
      return { ...p, quantity: 0 };
    });
  }
}

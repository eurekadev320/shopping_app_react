import { Product } from "../model/product";

export enum Types {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type Payload = {
  [Types.ADD_TO_CART]: Product;
  [Types.REMOVE_FROM_CART]: Product;
};

export type State = {
  products: Product[];
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const ShoppingReducer = (state: State, action: Actions) => {
  console.log("TTTTTTTTTTTTT");
  switch (action.type) {
    case Types.ADD_TO_CART:
      let existed_item = state.products.find(
        (item) => action.payload.productId.value === item.productId.value
      );
      let addedItem = action.payload;
      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
        };
      } else {
        addedItem.quantity = 1;
        return {
          ...state,
          products: [...state.products, addedItem],
        };
      }

    case Types.REMOVE_FROM_CART:
      console.log("QQQ", JSON.stringify(state));
      return {
        products: [
          ...state.products.filter(
            (product) =>
              product.productId.value !== action.payload.productId.value
          ),
        ],
      };

    default:
      return state;
  }
};

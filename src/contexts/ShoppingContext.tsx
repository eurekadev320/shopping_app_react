import * as React from "react";
import { ShoppingReducer, Actions, State } from "../reducers/ShoppingReducer";

const initialState = {
  products: [],
};

const ShoppingContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ShoppingProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(ShoppingReducer, initialState);

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };

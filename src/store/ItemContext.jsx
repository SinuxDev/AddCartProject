import { createContext, useContext, useReducer } from "react";

const intinalState = {
    item : [],
    totalAmount : [],
};
const itemReducer = (state,action) => {
    return intinalState;
}

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const ItemContextProvider = (props) => {

   const [itemState] =  useReducer(itemReducer,intinalState)

    const itemContextValue = {
        items: [],
        totalAmount: 0,
        addItem: () => {},
        removeItem: () => {},
    };

  return (
    <ItemContext.Provider value={itemContextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
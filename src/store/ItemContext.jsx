import { createContext, useContext, useReducer } from "react";

const intinalState = {
    items : [],
    totalAmount : 0,
};
const itemReducer = (state,action) => {
    if(action.type == "ADD_ITEM"){
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      return{
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      }
    }
    return intinalState;
}

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {

  const [itemState,dispatchItem] =  useReducer(itemReducer,intinalState);

  const addItemHandler = (item) => {
    dispatchItem({type : "ADD_ITEM", item })
  }

  const removeItemHandler = (id) => {
    dispatchItem({type :"REMOVE_ITEM", id })
  }

  const itemContextValue = {
        items: itemState.items,
        totalAmount: itemState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
  };

  return (
    <ItemContext.Provider value={itemContextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
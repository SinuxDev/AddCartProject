import { createContext, useContext, useReducer } from "react";

const intinalState = {
    items : [],
    totalAmount : 0,
};
const itemReducer = (state,action) => {
    if(action.type == "ADD_ITEM"){
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      const existItemIndex = state.items.findIndex(item => item.id == action.item.id);

      const existItem = state.items[existItemIndex];

      let updatedItems;
      if(existItem){
        const updatedItem = {
          ...existItem,
          amount : existItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existItemIndex] = updatedItem;
      }else{
         updatedItems = state.items.concat(action.item);
      }

      return{
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      };
    }

    if(action.type == "REMOVE_ITEM"){
      const existItemIndex = state.items.findIndex(
        (item) => item.id == action.id
      );
      const existItem = state.items[existItemIndex];
      const updatedTotalAmount = state.totalAmount = existItem.price;

      let updatedItems;
      if(existItem.amount == 1){
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      else{
        const updatedItem = {...existItem, amount : existItem.amount -1};
        updatedItems = [...state.items];
        updatedItems[existItemIndex] = updatedItem;
      }

      return{
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      };
    };

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
import { createContext, useContext } from "react";

const addItemHandler = () =>{

}

const removeItemHandler = () =>{
    
}

export const ItemContext = createContext({
    items : [],
    totalAmount : 0,
    addItem : addItemHandler,
    removeItem : removeItemHandler,
});

const ItemContextProvider = (props) => {
    return(
        <ItemContext.Provider value={ItemContext} >
            {props.children}
        </ItemContext.Provider>
    )    
};

export default ItemContextProvider
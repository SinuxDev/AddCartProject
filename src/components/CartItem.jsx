import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const CartItem = ({fruit}) => {

  const {addItem} = useContext(ItemContext)

  const {removeItem} = useContext(ItemContext)
  
  
  const addAmountHandler = () => {
    addItem({...fruit,amount : 1});
  }

  const removeAmountHandler = () => {
    removeItem(fruit.id);
  }

  return (
    <div className='card cart' >
        <div>
            <p className='card-title' > {fruit.name} </p>
            <p className='card-price'> {fruit.price} $ </p>       
        </div>

        <div className='right-side' >
            <p className='card-quantity' > x <span> {fruit.amount} </span> </p>
            <div className='quantity-ctr' >
                <button className='quantity-btn m-ctr' onClick={addAmountHandler} >+</button>
                <button className='quantity-btn' onClick={removeAmountHandler} >-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
import React, { useContext, useState } from 'react'
import { ItemContext } from '../store/ItemContext';

const Card = ({fruit}) => {
  const {id,name,price} = fruit;
  const {addItem} = useContext(ItemContext);

  const [currentAmount,setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if(currentAmountNumber < 1 || currentAmountNumber > 5){
      alert("Please enter an valid amount !!! MotherFucker")
      return;
    }
      addItem({
        id,
        name,
        price,
        amount : currentAmountNumber,
      })
  }
  
  return (
    <div className='card' >
        <div>
            <p className='card-title' > {fruit.name} </p>
            <p className='card-desc'> {fruit.description} </p>
            <p className='card-price'> {fruit.price} $ </p>
        </div>

        <div className='right-side' >
            <input type="number" className='card-input'min={1} max={5} value={currentAmount} onChange={(e)=>{
              setCurrentAmount(e.target.value);
            }} />
            <button className='card-button' onClick={addToCartHandler}> Add Cart </button>
        </div>
    </div>
  )
}

export default Card
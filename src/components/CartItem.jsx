import React from 'react'

const CartItem = ({fruit}) => {
  return (
    <div className='card cart' >
        <div>
            <p className='card-title' > {fruit.name} </p>
            <p className='card-desc'> {fruit.description} </p>
        </div>

        <div className='right-side' >
            <p className='card-price'> {fruit.price} $ </p>
            <input type="number" className='cart-input'min={1} max={5} value={1} />
        </div>
    </div>
  )
}

export default CartItem
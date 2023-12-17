import React from 'react'
import Cart from './Cart' 
const BackDrop = (props) => {
  return (
    <>
      {
      props.showCart && (
        <section className='back-drop' onClick={props.hideCart} > 
          <Cart hideCart = {props.hideCart} /> 
        </section>)
      }
      
    </>
  )
}

export default BackDrop
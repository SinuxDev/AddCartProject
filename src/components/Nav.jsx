import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const Nav = (props) => {

  const { items } = useContext(ItemContext)
  const totalCart = 0;

  return (
    <nav className='nav'>
        <h2>SinuxShop</h2>
        <button onClick={props.showCartHandler} >
            Cart <span>({ totalCart })</span>
        </button>
    </nav>
  )
}

export default Nav
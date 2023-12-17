import { useState } from 'react'
import BackDrop from '../components/BackDrop'
import Body from './Body'
import Header from './Header'

const Main = () => {

  const [showCart, setshowCart] = useState(false);

  const showCartHandler = () => {
    setshowCart(true);
  }

  const hideCart = () => {
    setshowCart(false)
  }

  return (
    <section className='main'>
    <Header showCartHandler = {showCartHandler} />
    <Body />
    <BackDrop showCart = {showCart} hideCart = {hideCart}  />
    </section>
  )
}

export default Main
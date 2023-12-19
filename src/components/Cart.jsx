import { useContext } from "react";
import CartItem from "./CartItem";
import { ItemContext } from "../store/ItemContext";

const Cart = (props) => {

  const {items, totalAmount} = useContext(ItemContext);

  const totalPrice = `${totalAmount.toFixed(2)}`

  return (
    <section className='cart-box' >
        <h2>Your cart items are here...</h2>
        <section className = 'overflow-ctr' >
        {
          items.length < 1 ? (<h1 className="No-Cart" >No Items in your cart...</h1>) : 
          (
            <>
              {
                items.map((fruit) => (
                  <CartItem key={fruit.id} fruit = { fruit} />
                ))
              }
            </>
          )
        }
        </section>        
        <hr />

        <div className="Total-sec">
          <h3>Total Price </h3>
          <p> $ {totalPrice} </p>
        </div>

        <div className="Button-sec">
          <button className="close-btn" onClick={props.hideCart}  >Close</button>
          {
            items.length < 1  ? (<></>) : (
              <button className="order-btn" onClick={()=>{
                alert("Order have been recorded!!!")
              }} >Order</button>
            )
          }
        </div>
    </section>
  )
}

export default Cart
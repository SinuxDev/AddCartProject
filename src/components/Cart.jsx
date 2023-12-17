import CartItem from "./CartItem";

const fruits = [
  {
    id : 1,
    price : 10.98,
    name : "Banana",
    description : "Yellow Banana",
    quantity : 2,
  },
  {
    id : 2,
    price : 12.98,
    name : "Apple",
    description : "Red Apple",
    quantity : 1,
  },
  {
    id : 3,
    price : 8,
    name : "Mango",
    description : "MaChitSu Mango",
    quantity : 2,
  },
];

const Cart = () => {
  return (
    <section className='cart-box' >
        <h2>Carts</h2>
        {
          fruits.map((fruit) => (
            <CartItem key={fruit.id} fruit = { fruit} />
          ))
        }
        <hr />

        <div className="Total-sec">
          <h3>Total Price </h3>
          <p>$ 3000</p>
        </div>

        <div className="Button-sec">
          <button className="close-btn" >Close</button>
          <button className="order-btn">Order</button>
        </div>
    </section>
  )
}

export default Cart
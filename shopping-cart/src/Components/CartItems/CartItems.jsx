import { useSelector } from 'react-redux'
import './CartItems.scss'
const CartItems = () => {
  const cartItems = useSelector(state => state.cart)
  console.log(cartItems)
  return (
    <>
      {cartItems.map((item) => (
        <article key={item.id} className='cart'>
          <p>{item.title}</p>
          <div className='cart__image-container'>
            <img src={item.image} alt={item.title} className='cart__image' />
          </div>
          <p>{item.price}</p>
          <div>
            <button>Remove</button>
          </div>
        </article>
      ))}
    </>
  );
}

export default CartItems
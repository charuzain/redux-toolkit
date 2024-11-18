import CartItems from "../../Components/CartItems/CartItems";
import { useSelector } from 'react-redux';


const CartPage = () => {
    const totalProduct = useSelector((state) =>
      state.cart.reduce((a, c) => a + c.quantity, 0)
    );

  return (
    <>
      {totalProduct > 0 ? <CartItems/> : <p>No product in the cart</p>}
    </>
  )
}

export default CartPage
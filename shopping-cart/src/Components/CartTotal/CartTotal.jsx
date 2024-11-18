import { useSelector } from "react-redux"

const CartTotal = () => {

  const totalPrice = useSelector(state => state.cart.reduce((a, c) => a + (c.quantity * c.price), 0))

  return (
    <div>Total Price: {totalPrice}</div>
  )
}

export default CartTotal
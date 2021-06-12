import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector, useDispatch } from "react-redux";
import { uiAction } from '../../store/uiSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const name = useSelector(state => state.cart.totalQuantity)
  const itemsFromStore = useSelector(state => state.cart.items);

  const dynamicCartName = (name === 0) ? "Your cart is empty" : "Your cart";


  const cartItems = itemsFromStore.map(item => <CartItem
    key={item.id}
    item={{
      title: item.title,
      quantity: item.quantity,
      total: item.totalPrice,
      price: item.price,
      id: item.id
    }}
  />)



  const confirmHandler = () => {
    // dispatch(cartActions.confirmOrder());
    dispatch(uiAction.toggle());
  }
  const closeCartHandler = () => {
    dispatch(uiAction.toggle());
  }

  return (
    <Card className={classes.cart}>
      <h2>{dynamicCartName}</h2>
      <ul>
        {cartItems}
      </ul>
      <button className={classes.btn1} onClick={confirmHandler} >Confirm</button>
      <button className={classes.btn} onClick={closeCartHandler}>Cancel</button>
    </Card>
  );
};

export default Cart;

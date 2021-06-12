import classes from './CartItem.module.css';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cartSlice";
import React from 'react';

const CartItem = (props) => {

  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dispatch(cartActions.addToCartHandler({
      id,
      title,
      price
    }));
  }
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }
  return (
    <React.Fragment>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <Button variant='contained' color='primary' onClick={addItemHandler}>+</Button>
            <Button variant="contained" color="secondary" onClick={removeItemHandler}>-</Button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default CartItem;

import classes from './CartButton.module.css';
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/uiSlice";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";


const CartButton = (props) => {

  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  // const history = useHistory();

  const cartHandler = () => {
    dispatch(uiAction.toggle());
    // history.push("/appStarted/yourOreders");
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

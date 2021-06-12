import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductItem = (props) => {
  const { title, price, id, description } = props;
  const dispatch = useDispatch();


  const cartHandler = () => {
    dispatch(cartActions.addToCartHandler({
      id,
      price,
      title
    }))
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}
export default ProductItem;

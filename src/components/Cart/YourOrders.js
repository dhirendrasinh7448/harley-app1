import React from 'react'
import { uiAction } from '../../store/uiSlice';
import { useDispatch } from "react-redux";
import classes from "./YourOrders.module.css"
function YourOrders(props) {

    const { title, price, quantity } = props;
    const dispatch = useDispatch();

    const closeOrders = () => {
        dispatch(uiAction.toggleOrders());
    };

    return (
        <div>
            <li className={classes.item}>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>
                        <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                    </div>
                </header>
                <div className={classes.details}>
                    <div className={classes.quantity}>
                        x <span>{quantity}</span>
                    </div>
                    <div className={classes.actions}>
                    </div>
                </div>
            </li>
            <button onClick={closeOrders}>Close</button>
        </div>
    )
}

export default YourOrders

import classes from './Menu.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

import { uiAction } from '../../store/uiSlice';
import { useDispatch } from "react-redux";

function Menu() {
    const dispatch = useDispatch();

    const showOrders = () => {
        dispatch(uiAction.toggle());
    };
    return (
        <div className={classes.menuDiv}>
            <ul className={classes.ul}>
                <li>
                    <Link to="/preview" className={classes.active} >Preview Bike</Link>
                </li>
                <li>
                    <Link to="/appStarted/openMenu/yourOrders" className={classes.bttn} onClick={showOrders}>Your Orders</Link>
                </li>
                <li>
                    <Link to="/" className={classes.active} >Log Out</Link>
                </li>

            </ul>
        </div>
    )
}

export default Menu;

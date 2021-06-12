
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { uiAction } from '../../store/uiSlice';
import { useHistory } from 'react-router';

const MainHeader = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const menuOpenHandler = () => {
    dispatch(uiAction.toggleMenu());
    history.push("/appStarted/openMenu");
  }

  return (
    <React.Fragment>
      <div className={classes.fixedHeader}>
        <header className={classes.header}>
          <div className={classes.buttonUI}>
            <button onClick={menuOpenHandler}>Menu</button>
          </div>
          <h1>Redux-app</h1>
          <nav>
            <ul>
              <li>
                <CartButton />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;

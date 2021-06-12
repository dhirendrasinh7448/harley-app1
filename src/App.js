import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Route } from "react-router-dom";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Login from "./components/Login-page/Login";
import Menu from "./components/Menu/Menu";
import Preview from "./components/Menu/Preview";
import YourOrders from "./components/Cart/YourOrders";


function App() {

  const showCart = useSelector(state => state.ui.showCart);
  const showOrders = useSelector(state => state.ui.showOrders);

  const openMenu = useSelector(state => state.ui.openMenu)
  const cart = useSelector(state => state.cart.items);
  console.log(cart);


  const orderedItems = cart.map(item => {
    return <YourOrders
      id={item.id}
      title={item.title}
      price={item.price}
      totalPrice={item.totalPrice}
      quantity={item.quantity}
    />
  })


  return (
    <Fragment>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/preview" exact>
        <Preview />
      </Route>
      <Route path="/appStarted">
        <Route path="/appStarted/openMenu">
          {openMenu && <Menu />}
        </Route>
        <Route path="/appStarted/openMenu/yourOrders">
          {showOrders && orderedItems}
        </Route>
        <Layout>
          <Route path="/appStarted">
            {showCart && <Cart />}
          </Route>
          <Products />
        </Layout>
      </Route>
    </Fragment>
  );
}

export default App;

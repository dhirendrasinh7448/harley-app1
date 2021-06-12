import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useState } from "react";
import Fatboy from "./bike.jpg";


const Products = (props) => {
  const [details, setDetails] = useState(false);
  const [bikeResult, setBikeResult] = useState('');

  const dynamicName = details ? "Close" : "World's First Bike"

  const DUMMY_BIKES = [{
    title: 'Iron 883',
    price: 11299,
    description: "v-twin Evolution, displacement 883cc, Air cooled",
    id: "M1",
  }, {
    title: 'Custom 1200',
    price: 13499,
    description: "v-twin Evolution, displacement 1200cc, Air cooled",
    id: "M2"
  }, {
    title: 'Fat Bob',
    price: 18799,
    description: "v-twin Milwaukee-Eight® 114, displacement 1745cc, Air cooled",
    id: "M3"
  }, {
    title: 'Street Bob',
    price: 18999,
    description: "v-twin Milwaukee-Eight® 114, displacement 1686cc, Air cooled",
    id: "M4"
  }, {
    title: 'Fat Boy',
    price: 30555,
    description: "v-twin Evolution, displacement 1868cc, Air cooled",
    id: "M5"
  }, {
    title: 'Street-Glide',
    price: 44999,
    description: "v-twin Milwaukee-Eight 108, displacement 1868cc, Air cooled",
    id: "M6"
  }, {
    title: 'Road King',
    price: 40299,
    description: "v-twin Milwaukee-Eight 107, displacement 1745cc, Air cooled",
    id: "M7"
  }];
  const openDetailsHandler = () => {
    setDetails(details => details = !details);
  }
  // const bikeTitle = useSelector(state => state.cart.searchBike);


  const searchChangeHandler = (event) => {
    setBikeResult(event.target.value);
  }
  return (
    <section className={classes.products}>
      <h2>Harley Davidson, Since 1903</h2>
      <button onClick={openDetailsHandler} className={classes.viewDetails}>{dynamicName}</button>
      {details && <img src={Fatboy} alt="First bike"></img>}
      <div className={classes.inputDiv}>
        <input type="text"
          placeholder="Search bikes"
          onChange={searchChangeHandler} />
        <i class="fas fa-search"></i>
      </div>
      <ul>
        {DUMMY_BIKES.filter((bike) => {
          if (bikeResult === "") {
            return bike;
          } else if (bike.title.toLowerCase().includes(bikeResult.toLowerCase())) {
            return bike;
          }
        }).map((bike) => {
          return (
            <ProductItem
              key={bike.id}
              id={bike.id}
              title={bike.title}
              price={bike.price}
              description={bike.description}
              dummyBike={bikeResult}
            />)
        })
        }
      </ul>
    </section>
  );
};

export default Products;

import React from 'react'
import Fatboy from "./fatboy.jpg";
import { NavLink } from "react-router-dom";
import classes from "./Preview.module.css";


function HomePage() {

    return (
        <div className={classes.div} >
            <NavLink activeClassName={classes.active} to="/appstarted">Back</NavLink>
            <img className={classes.imageBike} src={Fatboy} alt="Harley Davidson Fat-boy" />
        </div>
    )
}

export default HomePage

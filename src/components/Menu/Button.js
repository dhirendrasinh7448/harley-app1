import React from 'react'

function Button() {
    return (
        <button className={classes.button} onClick={cartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    )
}

export default Button

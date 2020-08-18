import React from 'react';
import cart from '../../assets/cart-73-512.png';
import classes from './Header.module.css';
export default function Header({ total }) {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Counter}>Counter</h1>

      <div className={classes.CartHolder}>
        <img src={cart} alt='cart-img' className={classes.cartImg} />
        <h1 className={classes.Total}>{total}</h1>
      </div>
    </div>
  );
}

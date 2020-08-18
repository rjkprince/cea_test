import React from 'react';
import cart from '../../assets/cart-73-512.png';
import classes from './Header.module.css';
export default function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Counter}>Counter</h1>
      <img src={cart} alt='cart-img' className={classes.cartImg} />
    </div>
  );
}

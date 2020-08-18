import React from 'react';
import classes from './Item.module.css';

export default function Item({
  id,
  data,
  increaseHandler,
  decreaseHandler,
  deleteHandler,
}) {
  return (
    <div className={classes.ItemWrapper}>
      <div
        className={`${classes.Btn} ${classes.Zero} ${
          data === 0 ? null : classes.nonZero
        }`}
      >
        {data === 0 ? 'Zero' : data}
      </div>
      <button
        type='button'
        className={classes.Btn}
        onClick={() => increaseHandler(id)}
      >
        Increase
      </button>
      <button
        type='button'
        className={classes.Btn}
        onClick={() => decreaseHandler(id)}
      >
        Decrease
      </button>
      <button
        type='button'
        className={`${classes.Btn} ${classes.Zero} ${classes.DltBtn}`}
        onClick={() => deleteHandler(id)}
      >
        Delete
      </button>
    </div>
  );
}

import React, { Component } from 'react';
import classes from './Item.module.css';

export default class Item extends Component {
  state = {
    count: 0,
  };
  increaseHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decreaseHandler = () => {
    if (this.state.count != 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div className={classes.ItemWrapper}>
        <div
          className={`${classes.Btn} ${classes.Zero} ${
            this.state.count == 0 ? null : classes.nonZero
          }`}
        >
          {this.state.count == 0 ? 'Zero' : this.state.count}
        </div>
        <button
          type='button'
          className={classes.Btn}
          onClick={this.increaseHandler}
        >
          Increase
        </button>
        <button
          type='button'
          className={classes.Btn}
          onClick={this.decreaseHandler}
        >
          Decrease
        </button>
        <button
          type='button'
          className={`${classes.Btn} ${classes.Zero} ${classes.DltBtn}`}
          onClick={(e) => this.props.deletehandler(e)}
        >
          Delete
        </button>
      </div>
    );
  }
}

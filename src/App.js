import React from 'react';
import Item from './Components/Item/Item';
import Header from './Components/Header/Header';
import classes from './App.module.css';
import { Component } from 'react';

class App extends Component {
  // <Item key={4} id={4} deletehandler={this.deleteHandler} />
  state = {
    Items: [
      {
        id: 1,
        data: 0,
      },
      {
        id: 2,
        data: 0,
      },
      {
        id: 3,
        data: 0,
      },
      {
        id: 4,
        data: 0,
      },
    ],
  };
  createTotal = () => {
    let dataArr = [...this.state.Items];
    let total = dataArr.reduce((acc, item) => {
      return acc + item.data;
    }, 0);

    return total;
  };
  increaseHandler = (id) => {
    let dataArr = [...this.state.Items];
    dataArr = dataArr.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          data: item.data + 1,
        };
      } else return item;
    });
    this.setState({
      Items: dataArr,
    });
  };

  decreaseHandler = (id) => {
    let dataArr = [...this.state.Items];
    dataArr = dataArr.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          data: item.data === 0 ? 0 : item.data - 1,
        };
      } else return item;
    });
    this.setState({
      Items: dataArr,
    });
  };

  deleteHandler = (id) => {
    let dataArr = [...this.state.Items];
    dataArr = dataArr.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      Items: dataArr,
    });
  };

  render() {
    let total = this.createTotal();
    const ItemArr = this.state.Items.map((item) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          data={item.data}
          increaseHandler={this.increaseHandler}
          decreaseHandler={this.decreaseHandler}
          deleteHandler={this.deleteHandler}
        />
      );
    });
    return (
      <div>
        <Header total={total} />
        <div className={classes.ItemCont}>{ItemArr}</div>
      </div>
    );
  }
}

export default App;

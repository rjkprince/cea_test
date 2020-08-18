import React from 'react';
import Item from './Components/Item/Item';
import Header from './Components/Header/Header';
import classes from './App.module.css';
import { Component } from 'react';

class App extends Component {
  state = {
    Items: [
      <Item key={1} id={1} deletehandler={this.deleteHandler} />,
      <Item key={2} id={2} deletehandler={this.deleteHandler} />,
      <Item key={3} id={3} deletehandler={this.deleteHandler} />,
      <Item key={4} id={4} deletehandler={this.deleteHandler} />,
    ],
  };

  deleteHandler = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <Header />
        <div className={classes.ItemCont}>{this.state.Items}</div>
      </div>
    );
  }
}

export default App;

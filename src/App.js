import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import MultipleListing from './components/MultipleListing';
import SingleProduct from './components/SingleProduct';
import CategoryView from './components/CategoryView';
import { Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/all-products' component={MultipleListing} />
          <Route path='/product/:product' component={SingleProduct} />
          <Route path='/category/:category' component={CategoryView} />
        </Switch>
      </div>
    );
  }
}

export default App;

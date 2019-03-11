import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  salad: .5,
  bacon: .5,
  cheese: .5,
  meat: .5
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  addIngredientHandler = (type) => {    
    const ingredients = {...this.state.ingredients};
    let newPrice = this.state.totalPrice;

    ingredients[type] = ingredients[type] + 1;
    
    newPrice = newPrice + INGREDIENTS_PRICES[type];

    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice
    });

    this.updatePurchaseState(ingredients);

  }

  removeIngredientHandler = (type) => {

    const ingredients = {...this.state.ingredients};
    let newPrice = this.state.totalPrice;

    if(!ingredients[type]) {
      return;
    }
    
    ingredients[type] = ingredients[type] - 1;
    
    newPrice = newPrice - INGREDIENTS_PRICES[type];

    this.setState({
      ingredients: ingredients,
      totalPrice: newPrice
    });

    this.updatePurchaseState(ingredients);

  }

  updatePurchaseState(ingredients) {
    
    const sum = Object.keys( ingredients )
      .map( igKey => {
          return ingredients[igKey];
      } )
      .reduce( ( sum, el ) => {
          return sum + el;
      }, 0);

    this.setState( { purchasable: sum > 0 } );

  }

  purchaseHandler = () => {
    console.log('purchase handler');
    this.setState({purchasing: true});
    console.log('bottom of purchase handler');
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  render () {
    return (
      <Aux>
        <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}/> 
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <b>Price: {this.state.totalPrice}</b>
        <BurgerControls 
            addHandler={this.addIngredientHandler}
            removeHandler={this.removeIngredientHandler}
            purchasable={this.state.purchasable}
            ingredients={this.state.ingredients}
            ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
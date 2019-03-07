import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 4,
            bacon: 4,
            cheese: 4,
            meat: 4
        }
    }

    addIngredientHandler(type) {    
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] + 1;

        this.setState({ingredients: ingredients});
    }

    removeIngredientHandler(type) {
        const ingredients = {...this.state.ingredients};
        ingredients[type] = ingredients[type] - 1;

        this.setState({ingredients: ingredients});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls 
                    addHandler={this.addIngredientHandler.bind(this)}
                    removeHandler={this.removeIngredientHandler.bind(this)}
                    ingredients={this.state.ingredients}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
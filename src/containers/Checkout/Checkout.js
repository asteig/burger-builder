import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

	state = {
		ingredients: {
			meat: 1,
			salad: 1,
			cheese: 1,
			bacon: 1,
		}
	}

	checkoutCancelledHandler = () => {
		console.log('Checkout is cancelled.');
		console.log(this.props);
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		console.log('Checkout is continued');
		console.log(this.props);
		this.props.history.replace('/checkout/customer-data');
	}

	render() {
		return (
			<div>
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler} />
			</div>
		);
	}
}

export default Checkout;
import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Hope it tastes good!</h1>
			<div style={{width: '100%'}}>
				<Burger ingredients={props.ingredients} />
				<Button 
					btnType="Danger"
					clicked>
					Cancel
				</Button>
				<Button 
					btnType="Success"
					clicked>
					Continue
				</Button>
			</div>
		</div>
	);
}

export default checkoutSummary;
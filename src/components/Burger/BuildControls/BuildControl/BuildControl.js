import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {

	const removeDisabled = (props.quantity <= 0) ? true : false;

	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<div className={classes.Quantity}>({props.quantity})</div>
			<button onClick={() => props.removeHandler(props.type)} className={classes.Less} disabled={removeDisabled}>Less</button>
			<button onClick={() => props.addHandler(props.type)} className={classes.More}>More</button>
		</div>
	);
}

export default buildControl;
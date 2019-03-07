import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label} ({props.quantity})</div>
		<button onClick={() => props.removeHandler(props.type)} className={classes.Less}>Less</button>
		<button onClick={() => props.addHandler(props.type)} className={classes.More}>More</button>
	</div>
);

export default buildControl;
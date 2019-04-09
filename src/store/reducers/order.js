import * as actionTypes from '../actions/actionTypes';

const initialState = {
	orders: [],
	loading: false,
	error: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_BURGER_START:
			return {
				...state,
				loading: true
			}
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			const newOrder = {
				id: action.orderId,
				...action.orderData
			}
			return {
				...state,
				orders: state.orders.concat(newOrder),
				loading: false,
			};
		case actionTypes.PURCHASE_BURGER_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
}

export default reducer;
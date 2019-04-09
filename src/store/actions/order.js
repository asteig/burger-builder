import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	}
}

export const purchaseBurgerFailed = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAILED,
		error: error
	}
}

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START,
		loading: true
	}
}

export const purchaseBurgerAxios = (orderData, history) => {
	
	return dispatch => {
		dispatch(purchaseBurgerStart());
		axios.post( '/orders.json', orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
                history.push('/orders');
            } )
            .catch( error => {
                dispatch(purchaseBurgerFailed(error));
            } );

	}
}
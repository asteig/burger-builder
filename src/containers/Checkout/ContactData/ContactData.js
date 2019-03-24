import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axios from '../../../axios-orders.js';

class ContactData extends Component {

	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
		}
	}

	orderHandler = (event) => {
		event.preventDefault();
		console.log('Order Button');
		console.log(this.props.ingredients);
		console.log(event);

        this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: this.state.name,
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );


	}

	inputOnChange = (event) => {
		const varName = event.target.name;
		this.setState({varName: event.target.value});
	}

	render = () => {
		let form = (
			<form>
				<input type="text" name="name" onChange={this.inputOnChange} placeholder="Your Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="text" name="address" placeholder="Your street address" />
				<input type="text" name="postcalCode" placeholder="Zip" />
			</form>
		);

		if(this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div>
				<h4>Contact Data</h4>
				{form}
				<Button 
				btnType="Success" clicked={this.orderHandler}>ORDER BURGER</Button>
			</div>
			
		);
	}


}

export default ContactData;
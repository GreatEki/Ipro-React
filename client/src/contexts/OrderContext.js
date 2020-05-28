import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const OrderContext = createContext();

const OrderContextProvider = (props) => {
	const [orders, setOrders] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [orderAlert, setOrderAlert] = useState('');
	let history = useHistory();
	const ENDPOINT = 'http://localhost:5000';

	const handleSubmitOrder = (e, userId, products, orderTotal) => {
		e.preventDefault();

		const paymentStatus = 'processing';
		const deliveryStatus = 'Delivering';
		const newOrder = {
			userId,
			products,
			orderTotal,
			paymentStatus,
			deliveryStatus,
		};

		placeOrder(newOrder);
		localStorage.setItem('cartItems', JSON.stringify([]));
		localStorage.setItem('cartTotal', JSON.stringify(0));

		setTimeout(() => {
			setOrderAlert('');
			history.push('/users/auth/dashboard');
		}, 3000);
	};

	const placeOrder = async (order) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(
				`http://localhost:5000/api/orders/place-order`,
				order,
				config
			);

			setIsSubmitted(true);
			setOrderAlert(res.data.message);
			console.log(res.data.message);
		} catch (err) {
			// history.push('/');
			setOrderAlert(err.message);
		}
	};

	const getUserOrders = async (userId) => {
		try {
			const res = await axios.get(`${ENDPOINT}/api/orders/${userId}`);

			if (!res) {
				setOrders([]);
			} else {
				setOrders(res.data.orders);
			}
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<OrderContext.Provider
			value={{
				handleSubmitOrder,
				getUserOrders,
				placeOrder,
				orders,
				orderAlert,
				isSubmitted,
			}}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;

import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const OrderContext = createContext();

const OrderContextProvider = (props) => {
	const [orders, setOrders] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [orderAlert, setOrderAlert] = useState('');
	let history = useHistory();

	const handleSubmitOrder = (e, userId, products, orderTotal) => {
		e.preventDefault();

		const paymentStatus = 'processing';
		const deliveryStatus = 'Delivering';

		const dateStyle = {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		};

		let today = new Date();

		const newOrder = {
			userId,
			products,
			orderTotal,
			paymentStatus,
			deliveryStatus,
			orderDate: today.toLocaleDateString('en-US', dateStyle),
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
				`${process.env.REACT_APP_ENDPOINT}/api/orders/place-order`,
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
			const res = await axios.get(
				`${process.env.REACT_APP_ENDPOINT}/api/orders/${userId}`
			);

			if (!res) {
				setOrders([]);
			} else {
				setOrders(res.data.orders);
				console.log(res.data.orders);
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

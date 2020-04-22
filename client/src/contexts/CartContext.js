import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const [qty, setQty] = useState(1);
	const [size, setSize] = useState('sm');

	const [ifNewItem, setIfNewItem] = useState(false);
	const [msgPop, setMsgPop] = useState({});

	//DESC: This method handles the Size selected by the customer in the Product Component
	const handleSize = (e) => {
		e.preventDefault();

		let input = e.target.name;

		switch (input) {
			case 'sm':
				setSize(input);

				break;

			case 'mid':
				setSize(input);

				break;
			case 'lg':
				setSize(input);

				break;

			case 'x-lg':
				setSize(input);

				break;
			case 'xx-lg':
				setSize(input);

				break;
			default:
				setSize('sm');
		}
	};

	//DESC: This method handles the Quantity selected by customer in the Product Component
	const handleQty = (e) => {
		e.preventDefault();

		const ops = e.target.name;

		if (ops === 'minus') {
			setQty(parseInt(e.target.value) - 1);
		} else if (ops === 'add') {
			setQty(parseInt(e.target.value) + 1);
		}
	};

	//DESC: This method handles saving items to our Cart. It is fired on the onSubmit event in our Product.js Component
	const addToCart = (product, size, qty) => {
		let val = uuidv4();

		let item = product[val];

		if (!item) {
			item = product[val] = {
				id: val,
				title: product.title,
				imagePath: product.imagePath,
				size: size,
				qty: qty,
				price: product.price * qty,
			};
		}

		setCartTotal((cartTotal) => (cartTotal += item.price));
		setCartItems((cartItems) => [...cartItems, item]);

		setIfNewItem(true);

		setMsgPop({
			message: 'Item Added to Cart',
			image: product.imagePath,
			title: product.title,
			size: item.size,
			price: item.price,
		});

		//This method allows me to automatically return back to the page the the customer was initially coming from
		window.history.go(-1);

		setTimeout(() => {
			setIfNewItem(false);
			setMsgPop({});
		}, 5000);
	};
	return (
		<CartContext.Provider
			value={{
				addToCart,
				handleQty,
				handleSize,
				size,
				qty,
				cartItems,
				cartTotal,
				msgPop,
				ifNewItem,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default withRouter(CartContextProvider);

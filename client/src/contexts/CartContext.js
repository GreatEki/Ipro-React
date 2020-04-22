import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';
export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const [qty, setQty] = useState(1);
	const [size, setSize] = useState('');

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
		let val = uuid();

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

		console.log(cartItems);
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
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;

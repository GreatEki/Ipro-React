import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';
export const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [deliveryRate, setDeliveryRate] = useState(1200);
	const [grandTotal, setGrandTotal] = useState(0);

	const [qty, setQty] = useState(1);
	const [size, setSize] = useState('sm');

	const [ifNewItem, setIfNewItem] = useState(false);
	const [msgPop, setMsgPop] = useState({});

	//DESC: This is used to save the cartItems in LocalStorage.
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
	}, [cartItems, cartTotal]);

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

		//This allows users to automatically return back to the page they were initially coming from
		window.history.go(-1);

		setTimeout(() => {
			setIfNewItem(false);
			setMsgPop({});
		}, 5000);
	};

	/* DESC:  This gets cartItems from localStorage, ensuring that our LocalStorage is in sync with cartItems state.   
	The items are displayed in your Cart.js component*/
	const getCartItems = () => {
		const localCart = localStorage.getItem('cartItems');
		setCartItems(JSON.parse(localCart));

		const localCartTotal = localStorage.getItem('cartTotal');
		setCartTotal(JSON.parse(localCartTotal));
	};

	const removeCartItem = (prod) => {
		setCartItems(cartItems.filter((item) => item.id !== prod.id));
		localStorage.setItem('cartItems', JSON.stringify(cartItems));

		setCartTotal((cartTotal) => (cartTotal -= prod.price));
		localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
		return cartItems;
	};
	return (
		<CartContext.Provider
			value={{
				addToCart,
				handleQty,
				handleSize,
				getCartItems,
				removeCartItem,
				setGrandTotal,
				grandTotal,
				deliveryRate,
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

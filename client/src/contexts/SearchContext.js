import React, { createContext, useState } from 'react';

import Axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [searchRes, setSearchRes] = useState([]);
	const [val, setVal] = useState('');

	const [homeEveryDayItem, setHomeEveryDayItem] = useState([]);
	const [homeBusinessItem, setHomeBusinessItem] = useState([]);
	const [homeNativeItem, setHomeNativeItem] = useState([]);
	const [homeBrandNewItem, setHomeBrandNewItem] = useState([]);

	let ENDPOINT = 'http://localhost:3004';

	//This method handles the input field for our search functionality
	const handleInput = (e) => {
		setVal(e.target.value);
	};

	//This method handles all search functionality.
	const searchProduct = async (val) => {
		try {
			const res = await Axios.get(`${ENDPOINT}/products/?q=${val}`);

			setSearchRes(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//Fetches the EveryDay Products displayed in the Home Page
	const homeEveryDayFetch = async () => {
		try {
			const res = await Axios.get(
				`${ENDPOINT}/products?id=87&id=90&id=24&id=85`
			);

			setHomeEveryDayItem(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	// Fetches the Business Products displayed in the Home Page
	const homeBusinessFetch = async () => {
		try {
			const res = await Axios.get(`${ENDPOINT}/products?id=81&id=23`);

			setHomeBusinessItem(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	// Fetches the Native Products displayed in the Home Page
	const homeNativeFetch = async () => {
		try {
			const res = await Axios.get(`${ENDPOINT}/products?id=59&id=39`);

			setHomeNativeItem(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	// Fetches the Brand New Products displayed in the Home Page
	const homeBrandNewFetch = async () => {
		try {
			const res = await Axios.get(
				`${ENDPOINT}/products?id=76&id=91&id=86&id=28`
			);

			setHomeBrandNewItem(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<SearchContext.Provider
			value={{
				handleInput,
				searchProduct,
				homeEveryDayFetch,
				homeBusinessFetch,
				homeNativeFetch,
				homeBrandNewFetch,
				searchRes,
				val,
				homeEveryDayItem,
				homeBusinessItem,
				homeNativeItem,
				homeBrandNewItem,
			}}>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;

import React, { createContext, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [searchRes, setSearchRes] = useState([]);
	const [val, setVal] = useState('');

	const [homeEveryDayItem, setHomeEveryDayItem] = useState([]);
	const [homeBusinessItem, setHomeBusinessItem] = useState([]);
	const [homeNativeItem, setHomeNativeItem] = useState([]);
	const [homeBrandNewItem, setHomeBrandNewItem] = useState([]);

	//This method handles the input field for our search functionality
	const handleInput = (e) => {
		setVal(e.target.value);
	};

	//This method handles all search functionality.
	const searchProduct = async (val) => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products/?q=${val}`
			);

			setSearchRes(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			}
			const errObj = err.response.data;
			console.log(errObj.message);
		}
	};

	//Fetches the EveryDay Products displayed in the Home Page
	const homeEveryDayFetch = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?id=87&id=90&id=24&id=85`
			);

			setHomeEveryDayItem(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};

	// Fetches the Business Products displayed in the Home Page
	const homeBusinessFetch = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?id=81&id=23`
			);

			setHomeBusinessItem(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};

	// Fetches the Native Products displayed in the Home Page
	const homeNativeFetch = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?id=59&id=39`
			);

			setHomeNativeItem(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};

	// Fetches the Brand New Products displayed in the Home Page
	const homeBrandNewFetch = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?id=76&id=91&id=86&id=28`
			);

			setHomeBrandNewItem(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};

	const pushToSearch = (e, val) => {
		e.preventDefault();
		props.history.push(`/search/${val}`);
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
				pushToSearch,
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
export default withRouter(SearchContextProvider);

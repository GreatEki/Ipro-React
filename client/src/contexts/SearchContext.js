import React, { createContext, useState } from 'react';

import Axios from 'axios';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
	const [searchRes, setSearchRes] = useState([]);
	const [val, setVal] = useState('');
	let ENDPOINT = 'http://localhost:3004';

	const handleInput = (e) => {
		setVal(e.target.value);
	};

	const searchProduct = async (val) => {
		try {
			const res = await Axios.get(`${ENDPOINT}/products/?q=${val}`);

			setSearchRes(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<SearchContext.Provider
			value={{ handleInput, searchProduct, searchRes, val }}>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;

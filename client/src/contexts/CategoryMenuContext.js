import React, { createContext, useState } from 'react';
import Axios from 'axios';

export const CategoryMenuContext = createContext();

const CategoryMenuContextProvider = (props) => {
	const [leisure, setLeisure] = useState([]);
	const [business, setBusiness] = useState([]);
	const [culture, setCulture] = useState([]);
	const [everyDay, setEveryDay] = useState([]);

	const fetchLeisure = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=leisure`
			);

			setLeisure(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				props.history.push('/500');
			}
		}
	};

	const fetchBusiness = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=business`
			);

			setBusiness(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				props.history.push('/500');
			}
		}
	};
	const fetchCulture = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=native`
			);

			setCulture(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				props.history.push('/500');
			}
		}
	};
	const fetchEveryDay = async () => {
		try {
			const res = await Axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=everyday`
			);

			setEveryDay(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else {
				props.history.push('/500');
			}
		}
	};
	return (
		<CategoryMenuContext.Provider
			value={{
				leisure,
				business,
				culture,
				everyDay,
				fetchLeisure,
				fetchBusiness,
				fetchCulture,
				fetchEveryDay,
			}}>
			{props.children}
		</CategoryMenuContext.Provider>
	);
};

export default CategoryMenuContextProvider;

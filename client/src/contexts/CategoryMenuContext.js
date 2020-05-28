import React, { createContext, useState } from 'react';
import { calls } from '../config/config';
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
				`${calls.ENDPOINT}/products?category=leisure`
			);

			setLeisure(res.data);
		} catch (err) {
			if (err.response.status === 500) {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};

	const fetchBusiness = async () => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/products?category=business`
			);

			setBusiness(res.data);
		} catch (err) {
			if (err.response.status === 500) {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};
	const fetchCulture = async () => {
		try {
			const res = await Axios.get(`${calls.ENDPOINT}/products?category=native`);

			setCulture(res.data);
		} catch (err) {
			if (err.response.status === 500) {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
			}
		}
	};
	const fetchEveryDay = async () => {
		try {
			const res = await Axios.get(
				`${calls.ENDPOINT}/products?category=everyday`
			);

			setEveryDay(res.data);
		} catch (err) {
			if (err.response.status === 500) {
				props.history.push('/500');
			} else {
				const errObj = err.response.data;
				console.log(errObj.message);
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
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
	const [everyDayMen, setEveryDayMen] = useState([]);
	const [businessMen, setBusinessMen] = useState([]);
	const [cultureMen, setCultureMen] = useState([]);
	const [leisureMen, setLeisureMen] = useState([]);
	const [businessWomen, setBusinessWomen] = useState([]);
	const [cultureWomen, setCultureWomen] = useState([]);
	const [everyDayWomen, setEveryDayWomen] = useState([]);
	const [leisureWomen, setLeisureWomen] = useState([]);

	//DESC: Fetches products for our EveryDayMen Component
	//URL: /products?category=everyday&gender=men&gender=unisex
	//REQUEST: GET
	const getEveryDayMenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=everyday&gender=men&gender=unisex'
			);

			setEveryDayMen(res.data);
			//console.log(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//DESC: Fetches products for our EveryDayMen Component
	//URL: '/products?category=business&gender=men&gender=unisex'
	//REQUEST TYPE: GET
	const getBusinessMenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=business&gender=men&gender=unisex'
			);

			setBusinessMen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//DESC: Fetches products for our CultureMen Component
	//URL:  /products?category=native&gender=men&gender=unisex
	//REQUEST: GET
	const getCultureMenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=native&gender=men&gender=unisex'
			);

			setCultureMen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	//DESC: Fetches products for our LeisureMen Component
	//URL:  /products?category=native&gender=men&gender=unisex
	//REQUEST: GET
	const getLeisureMenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=leisure&gender=men&gender=unisex'
			);

			setLeisureMen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//DESC: Fetches products for our BusinessWomen Component
	//URL:  /products?category=business&gender=women&gender=unisex'
	//REQUEST: GET
	const getBusinessWomenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=business&gender=women&gender=unisex'
			);

			setBusinessWomen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	//DESC: Fetches products for our cultureWomen Component
	//URL:  /products?category=business&gender=women&gender=unisex'
	//REQUEST: GET
	const getCultureWomenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=native&gender=women'
			);

			setCultureWomen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	//DESC: Fetches products for our everyDayWomen Component
	//URL:  /products?category=everyday&gender=women&gender=unisex'
	//REQUEST: GET
	const geteveryDayWomenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=everyday&gender=women&gender=unisex'
			);

			setEveryDayWomen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	//DESC: Fetches products for our everyDayWomen Component
	//URL:  /products?category=everyday&gender=women&gender=unisex'
	//REQUEST: GET
	const getLeisureWomenProducts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3004/products?category=leisure&gender=women&gender=unisex'
			);

			setLeisureWomen(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};
	return (
		<ProductsContext.Provider
			value={{
				getEveryDayMenProducts,
				everyDayMen,
				getBusinessMenProducts,
				businessMen,
				getCultureMenProducts,
				cultureMen,
				getLeisureMenProducts,
				leisureMen,
				getBusinessWomenProducts,
				businessWomen,
				getCultureWomenProducts,
				cultureWomen,
				geteveryDayWomenProducts,
				everyDayWomen,
				getLeisureWomenProducts,
				leisureWomen,
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;

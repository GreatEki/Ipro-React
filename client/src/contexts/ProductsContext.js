import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [everyDayMen, setEveryDayMen] = useState([]);
	const [businessMen, setBusinessMen] = useState([]);
	const [cultureMen, setCultureMen] = useState([]);
	const [leisureMen, setLeisureMen] = useState([]);
	const [businessWomen, setBusinessWomen] = useState([]);
	const [cultureWomen, setCultureWomen] = useState([]);
	const [everyDayWomen, setEveryDayWomen] = useState([]);
	const [leisureWomen, setLeisureWomen] = useState([]);

	const [product, setProduct] = useState({});
	const [shopProducts, setShopProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(20);
	const [totalPost, setTotalPost] = useState(0);
	let indexOfFirstProduct = Number;
	let indexOfLastProduct = Number;

	//DESC: Fetches products for our EveryDayMen Component
	//URL: /products?category=everyday&gender=men&gender=unisex
	//REQUEST: GET
	const getEveryDayMenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=everyday&gender=men&gender=unisex`
			);

			setEveryDayMen(res.data);
			//console.log(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: Fetches products for our EveryDayMen Component
	//URL: '/products?category=business&gender=men&gender=unisex'
	//REQUEST TYPE: GET
	const getBusinessMenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=business&gender=men&gender=unisex`
			);

			setBusinessMen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: Fetches products for our CultureMen Component
	//URL:  /products?category=native&gender=men&gender=unisex
	//REQUEST: GET
	const getCultureMenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=native&gender=men&gender=unisex`
			);

			setCultureMen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};
	//DESC: Fetches products for our LeisureMen Component
	//URL:  /products?category=native&gender=men&gender=unisex
	//REQUEST: GET
	const getLeisureMenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=leisure&gender=men&gender=unisex`
			);

			setLeisureMen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: Fetches products for our BusinessWomen Component
	//URL:  /products?category=business&gender=women&gender=unisex'
	//REQUEST: GET
	const getBusinessWomenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=business&gender=women&gender=unisex`
			);

			setBusinessWomen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};
	//DESC: Fetches products for our cultureWomen Component
	//URL:  /products?category=business&gender=women&gender=unisex'
	//REQUEST: GET
	const getCultureWomenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=native&gender=women`
			);

			setCultureWomen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: Fetches products for our everyDayWomen Component
	//URL:  /products?category=everyday&gender=women&gender=unisex'
	//REQUEST: GET
	const geteveryDayWomenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=everyday&gender=women&gender=unisex`
			);

			setEveryDayWomen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};
	//DESC: Fetches products for our everyDayWomen Component
	//URL:  /products?category=everyday&gender=women&gender=unisex'
	//REQUEST: GET
	const getLeisureWomenProducts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products?category=leisure&gender=women&gender=unisex`
			);

			setLeisureWomen(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: This fecthes a particular product a customer selects for purchase and renders on the Product Component
	//URL: /products/${id}
	//REQUEST: GET
	const getProduct = async (id) => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products/${id}`
			);

			setProduct(res.data);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	//DESC: This fecthes the products displayed in our Shop Component
	//URL: /products
	//REQUEST: GET
	const getAllProducts = async () => {
		try {
			setIsLoading(true);

			indexOfLastProduct = currentPage * productsPerPage;
			indexOfFirstProduct = indexOfLastProduct - productsPerPage;

			const res = await axios.get(
				`${process.env.REACT_APP_JSON_ENDPOINT}/products`
			);
			setTotalPost(res.data.length);

			const currentProducts = res.data.slice(
				indexOfFirstProduct,
				indexOfLastProduct
			);

			setShopProducts(currentProducts);
			setIsLoading(false);
		} catch (err) {
			if (err.message === 'Network Error') {
				props.history.push('/500');
			} else if (err.response) {
				props.history.push('/500');
			}
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				isLoading,
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
				getProduct,
				product,
				getAllProducts,
				shopProducts,
				totalPost,
				productsPerPage,
				setCurrentPage,

				currentPage,
			}}>
			{props.children}
		</ProductsContext.Provider>
	);
};

export default ProductsContextProvider;

import React, { useContext } from 'react';

import { ProductsContext } from '../../contexts/ProductsContext';
const Pagination = () => {
	const { isLoading, productsPerPage, totalPost, setCurrentPage } = useContext(
		ProductsContext
	);

	//console.log(NoofTabs);

	if (isLoading) {
		return <h1 className='text-center text-body'> Fetching Products </h1>;
	} else {
		const pageNumbers = [];
		const NoofTabs = Math.ceil(totalPost / productsPerPage);

		for (let i = 1; i <= NoofTabs; i++) {
			pageNumbers.push(i);
		}
		return (
			<nav className='pagination'>
				{pageNumbers.map((no) => {
					return (
						<li className='page-item' key={no}>
							<button
								className='page-link text-body'
								onClick={() => setCurrentPage(no)}>
								{no}
							</button>
						</li>
					);
				})}
			</nav>
		);
	}
};

export default Pagination;

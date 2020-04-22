import React, { useContext } from 'react';

import { ProductsContext } from '../../contexts/ProductsContext';
const Pagination = () => {
	const { isLoading, productsPerPage, totalPost, setCurrentPage } = useContext(
		ProductsContext
	);

	//console.log(NoofTabs);

	if (isLoading) {
		return (
			<div className='container'>
				<h1 className='text-center text-body'> Getting Products </h1>
			</div>
		);
	} else {
		const pageNumbers = [];
		const NoofTabs = Math.ceil(totalPost / productsPerPage);

		for (let i = 1; i <= NoofTabs; i++) {
			pageNumbers.push(i);
		}
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-4 offset-md-4'>
						<nav className='pagination'>
							{pageNumbers.map((no) => {
								return (
									<li className='page-item m-2' key={no}>
										<button
											className='page-link text-body'
											onClick={() => setCurrentPage(no)}>
											{no}
										</button>
									</li>
								);
							})}
						</nav>
					</div>
				</div>
			</div>
		);
	}
};

export default Pagination;

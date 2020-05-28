import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

const HomeEveryDay = () => {
	const { homeEveryDayFetch, homeEveryDayItem } = useContext(SearchContext);

	useEffect(() => {
		homeEveryDayFetch();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='row p-lg-4 card-body'>
				{homeEveryDayItem.map((product, index) => {
					return (
						<div className='col-lg-3 col-md-6 col-12 mb-3 HomeProd' key={index}>
							<Link to={`/product/${product.title}/${product.id}`}>
								<img
									className='front-img img-fluid'
									src={`/products/${product.imagePath}`}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara font-weight-bold'>
								{' '}
								{product.title}{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del> {product.price}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default HomeEveryDay;

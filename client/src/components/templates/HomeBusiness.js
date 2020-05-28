import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

const HomeBusiness = () => {
	const { homeBusinessFetch, homeBusinessItem } = useContext(SearchContext);

	useEffect(() => {
		homeBusinessFetch();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='row card-body'>
				<div className='col-lg-6 businessBanner col-12 mb-3'>
					<h2 className='text-white pt-3'> Business Trends</h2>
					<span className='text-white d-block'> New Design 2020</span>
					<small className='text-white d-block'> Shop Business</small>
				</div>

				{homeBusinessItem.map((product, index) => {
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
								{product.title}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>
								{product.price}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default HomeBusiness;

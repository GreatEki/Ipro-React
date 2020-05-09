import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

const HomeNative = () => {
	const { homeNativeFetch, homeNativeItem } = useContext(SearchContext);

	useEffect(() => {
		homeNativeFetch();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='row card-body'>
				{homeNativeItem.map((product) => {
					return (
						<div
							className='col-lg-3 col-md-6 col-12 mb-3 HomeProd'
							key={product.id}>
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

				<div className='col-lg-6 col-12 mb-3 nativeBanner'>
					<div>
						<h2 className='text-white pt-3 text-center'>
							{' '}
							Owambe and Elite Cultural Wears
						</h2>

						<p className='text-center text-warning paraIntro'>
							{' '}
							Be the <i className='fas fa-star'></i> of the party
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeNative;

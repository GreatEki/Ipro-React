import React, { useEffect, useContext } from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import Pagination from './templates/Pagination';
import CartAlert from './templates/CartAlert';
import { Link } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';
import { ProductsContext } from '../contexts/ProductsContext';

const Search = (props) => {
	const val = props.match.params.val;

	const { searchProduct, searchRes } = useContext(SearchContext);
	const { currentPage } = useContext(ProductsContext);

	useEffect(() => {
		searchProduct(val);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [val, currentPage]);
	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home &gt;{' '}
						</Link>{' '}
						<Link to='/shop' className='site-font text-decoration-none'>
							Search Result &gt;{' '}
						</Link>{' '}
						<h1 className='site-font my-4'> {val} </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper justify-content-center px-lg-5 px-md-2'>
					<CartAlert />
					<div className='row mt-5 px-lg-5 pt-5'>
						{/*============================ Products Display Starts Here ==========================*/}
						{searchRes.length < 1 ? (
							<h1 className='text-center'> No Products Found </h1>
						) : (
							searchRes.map((product) => {
								return (
									<div
										className='col-md-6 col-sm-6 col-lg-2 shop-gallery'
										key={product.id}>
										<Link
											to={`/product/${product.title}/${product.id}`}
											className='card  item-card mb-3'>
											<div className='row no-gutters'>
												<div className='col-6 col-lg-12'>
													<img
														src={`/products/${product.imagePath}`}
														className='card-img'
														alt='product-name'
													/>
												</div>
												<div className='col-6 col-lg-12'>
													<div className='card-body'>
														<small className='card-title'>
															{product.title}
														</small>
														<h5 className='card-text'>
															<del>N</del> {product.price}
														</h5>
														<p className='card-text'>
															<small className='text-muted'>
																Available in Stock
															</small>
														</p>
														<button
															to={`/product/${product.title}/${product.id}`}
															className='btn btn-block btn-outline-success text-center'>
															Buy{' '}
														</button>
													</div>
												</div>
											</div>
										</Link>
									</div>
								);
							})
						)}

						{/*============================== End of Products Display ===============================*/}

						<div className='container justify-content-end mt-5'>
							<div className='row'>
								<div className='col-lg-2 offset-lg-3'>
									<Pagination className='text-center' />
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Search;

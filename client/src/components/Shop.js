import React, { useContext, useEffect } from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom';

const Shop = () => {
	const { getAllProducts, shopProducts } = useContext(ProductsContext);

	useEffect(() => {
		getAllProducts();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home >{' '}
						</Link>{' '}
						<Link to='/shop' className='site-font text-decoration-none'>
							SHOP >{' '}
						</Link>{' '}
						<h1 className='site-font my-4'>SHOP </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper justify-content-center px-lg-5 px-md-2'>
					<div className='row mt-5 px-lg-5 pt-5'>
						{/*============================ Products Display Starts Here ==========================*/}
						{shopProducts.map((product) => {
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
													<small className='card-title'>{product.title}</small>
													<h5 className='card-text'>
														<del>N</del> {product.price}
													</h5>
													<p className='card-text'>
														<small className='text-muted'>
															Available in Stock
														</small>
													</p>
													<Link className='btn btn-block btn-outline-success text-center'>
														Buy{' '}
													</Link>
												</div>
											</div>
										</div>
									</Link>
								</div>
							);
						})}

						{/*============================== End of Products Display ===============================*/}
					</div>
				</main>
			</div>
		</>
	);
};

export default Shop;

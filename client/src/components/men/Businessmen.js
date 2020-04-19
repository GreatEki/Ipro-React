import React, { useContext, useEffect } from 'react';
import Navbar from '../templates/Navbar';
import Navmen from '../templates/Navmen';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
const Businessmen = () => {
	const { getBusinessMenProducts, businessMen } = useContext(ProductsContext);

	useEffect(() => {
		getBusinessMenProducts();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='wrapper container-fluid m-0 p-0'>
				<Navbar />
				<Navmen />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home >{' '}
						</Link>{' '}
						<Link to='/men' className='site-font text-decoration-none'>
							Men >{' '}
						</Link>{' '}
						<Link
							to='/cart/overview'
							className='active site-font
						text-decoration-none'>
							{' '}
							Business and Corporate
						</Link>
						<h1 className='site-font my-4'>Business </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper justify-content-center px-lg-5 px-md-2'>
					<div className='row mt-5 px-lg-5 pt-5'>
						{/*============================ Products Display Starts Here ==========================*/}
						{businessMen.map((product) => {
							return (
								<div
									className='col-md-6 col-sm-6 col-lg-2 shop-gallery'
									key={product.id}>
									<div className='card  item-card mb-3'>
										<div className='row no-gutters'>
											<div className='col-md-4 col-sm-4 col-lg-12'>
												<img
													src={`/products/${product.imagePath}`}
													className='card-img'
													alt='product-name'
												/>
											</div>
											<div className='col-md-8 col-sm-8 col-lg-12'>
												<div className='card-body'>
													<p className='card-title'>{product.title}</p>
													<h5 className='card-text'>
														<del>N</del> {product.price}
													</h5>
													<p className='card-text'>
														<small className='text-muted'>
															Available in Stock
														</small>
													</p>
													<button className='btn btn-block btn-outline-success text-center'>
														Buy{' '}
													</button>
												</div>
											</div>
										</div>
									</div>
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

export default Businessmen;

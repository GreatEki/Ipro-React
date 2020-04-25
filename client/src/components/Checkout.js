import React, { useContext, useEffect } from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const CheckOut = () => {
	const {
		cartItems,
		cartTotal,
		deliveryRate,
		grandTotal,
		setGrandTotal,
	} = useContext(CartContext);

	useEffect(() => {
		setGrandTotal(cartTotal + deliveryRate);
	}, []);
	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<NavGeneral />
			</div>

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link to='/products' className='site-font text-decoration-none'>
						Product >{' '}
					</Link>{' '}
					<Link
						to='/products/checkout'
						className='active site-font
						text-decoration-none'>
						{' '}
						CheckOut
					</Link>
					<h1 className='site-font my-4'>CheckOut </h1>
				</div>
			</section>

			<div className='container-fluid content-wrapper'>
				<div className='container mx-auto my-5 py-5'>
					<div className='row bg-white py-5 align-items-end'>
						{/* Checkout Title Bar - Products and Subtotal*/}
						<div className='col-6 px-lg-5'>
							<h5> PRODUCTS </h5>
						</div>
						<div className='col-6 px-lg-5'>
							<h5 className='text-right'> SUBTOTAL</h5>
						</div>
						{/* End of CheckOut Title Bar - Products and Subtotal*/}

						<div className='w-100'></div>
						{/*Cart Items Display Starts here*/}

						{cartItems.map((item) => {
							return (
								<>
									<div className='col-6 px-lg-5'>
										<div className='d-flex flex-row'>
											<img
												className='img-fluid cart-pics detail ml-3 d-inline'
												src={`/products/${item.imagePath}`}
												alt='product-title'
											/>
											<div className='d-inline'>
												<p className='detail p-2 m-0'>{item.title}</p>
												<p className='p-2 m-0 d-inline detail'>
													<span>size: </span> {item.size}
												</p>
												<p className='p-2 m-0 detail'>
													Qty: <span> ( {item.qty} ) </span>
												</p>
											</div>
										</div>
									</div>
									<div className='col-6 px-lg-5'>
										<div className='text-right font-weight-bold'>
											<del className='del'> N</del> {item.price}
										</div>
									</div>
								</>
							);
						})}

						{/*End of Cart Items display Starts here */}
					</div>

					{/*Sub Total, Delivery Charge and Grand Total Section*/}
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='site-font'> SUBTOTAL </h5>
						</div>

						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> {cartTotal}
							</h5>
						</div>
					</div>
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='site-font'> DELIVERY CHARGE </h5>
						</div>

						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> {deliveryRate}
							</h5>
						</div>
					</div>
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-5 px-lg-5'>
							<h5 className='site-font text-danger'> GRAND TOTAL </h5>
						</div>

						<div className='col-6 mt-5 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> {grandTotal}
							</h5>
						</div>
					</div>

					<div className='bg-white row'>
						<div className='col-md-12 py-5 col-lg-6 offset-lg-3'>
							<button className='btn btn-block btn-success rounded-0'>
								{' '}
								PAY NOW{' '}
							</button>
						</div>
					</div>

					{/*End of SubTotal, Delivery Charge and Grand Total Section*/}
				</div>
			</div>
		</>
	);
};

export default CheckOut;

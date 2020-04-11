import React from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';

const CheckOut = () => {
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
						<div className='col-6 px-lg-5'>
							<img
								className='img-fluid cart-pics d-inline'
								src='/images/artem-bali.jpg'
								alt='prod-name'
							/>
							<p className='d-inline'>Artem-Bali </p>

							<div className='d-block'>
								size:<span> mid</span>{' '}
							</div>
							<div className='d-block'>
								qty:<span> ( 5 )</span>{' '}
							</div>
						</div>
						<div className='col-6 px-lg-5'>
							<div className='text-right font-weight-bold'>
								<del className='del'> N</del> 3,000
							</div>
						</div>
						{/*End of Cart Items display Starts here */}
					</div>

					{/*Sub Total, Delivery Charge and Grand Total Section*/}
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='site-font'> SUBTOTAL </h5>
						</div>

						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> 3, 000
							</h5>
						</div>
					</div>
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='site-font'> DELIVERY CHARGE </h5>
						</div>

						<div className='col-6 mt-3 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> 1,500
							</h5>
						</div>
					</div>
					<div className='row bg-white align-items-end'>
						<div className='col-6 mt-5 px-lg-5'>
							<h5 className='site-font text-danger'> GRAND TOTAL </h5>
						</div>

						<div className='col-6 mt-5 px-lg-5'>
							<h5 className='text-right'>
								<del className='del'>N</del> 30, 000
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

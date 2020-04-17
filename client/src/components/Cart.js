import React from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';

const Cart = () => {
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
						<Link to='/products' className='site-font text-decoration-none'>
							Product >{' '}
						</Link>{' '}
						<Link
							to='/products/checkout'
							className='active site-font
						text-decoration-none'>
							{' '}
							Cart
						</Link>
						<h1 className='site-font my-4'>Cart </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper'>
					<div className='container my-5'>
						<div className='card m-0'>
							<div className='card-header row m-0'>
								<div className='col-3'>
									<b>Product Detail</b>
								</div>
								<div className='col-3'>
									<b className='text-center'>Quantity</b>
								</div>

								<div className='col-3'>
									{' '}
									<b className='text-center'>Item Price</b>
								</div>

								<div className='col-3 text-right'>
									{' '}
									<b>Action </b>
								</div>
							</div>

							<section className='card-body row'>
								<div className='col-3'>
									<img
										className='d-inline cart-image'
										src='/images/gown-pink.jpg'
										alt='product-title'
									/>

									<p className='site-font-sm text-muted d-inline'>
										{' '}
										Pink Gown{' '}
									</p>
									<p className='site-font-sm text-muted pl-2'>mid </p>
								</div>

								<div className='col-3'>
									<h3 className='site-font mx-4'> (2) </h3>
								</div>

								<div className='col-3'>
									<h4 className='text-muted mx-4'>
										{' '}
										<del className='del'>N </del>
										11, 000
									</h4>
								</div>

								<div className='col-3 text-right'>
									<button className='text-danger btn btn-warning'>
										{' '}
										Remove Item{' '}
									</button>
								</div>
							</section>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Cart;

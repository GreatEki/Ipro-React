import React, { useContext, useEffect } from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = (props) => {
	const { cartItems, cartTotal, getCartItems, removeCartItem } = useContext(
		CartContext
	);

	useEffect(() => {
		getCartItems();
		window.scrollTo(0, 0);

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
							Home{' '}
						</Link>{' '}
						<Link to='/products' className='site-font text-decoration-none'>
							Product{' '}
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
						{/*================= Cart Item Starts Here =======================*/}
						{cartItems.length > 0 ? (
							cartItems.map((item) => {
								return (
									<div className='row cart-slot mb-3' key={item.id}>
										<div className='col-12 col-md-4 m-0 p-md-0'>
											<div className='cart-title-bar pl-lg-2'>
												{' '}
												Product Details
											</div>
											<div className='d-flex flex-row'>
												<img
													className='img-fluid cart-image detail ml-3 d-inline'
													src={`/products/${item.imagePath}`}
													alt='product-title'
												/>
												<div className='d-inline'>
													<p className='detail p-2 m-0'>{item.title}</p>
													<p className='p-2 m-0'>
														<span>size: </span> {item.size}
													</p>
												</div>
											</div>
										</div>

										<div className='col-6 col-md-2 m-0 p-md-0'>
											<div className='cart-title-bar'> Quantity</div>
											<p className='detail'>({item.qty}) qty </p>
										</div>

										<div className='col-6 col-md-2 m-0 p-md-0'>
											<div className='cart-title-bar'> Price</div>
											<p className='detail'>
												{' '}
												<del className='del'>N</del> {item.price}
											</p>
										</div>

										<div className='col-6 col-md-2 m-0 p-md-0'>
											<div className='cart-title-bar'> Action</div>
											<Link
												to='/'
												className='text-info detail cart-action mt-md-4 pt-5'>
												{' '}
												Save Item for Later
											</Link>
										</div>

										<div className='col-6 col-md-2 m-0 p-md-0'>
											<div className='cart-title-bar'> Action</div>
											<button
												onClick={() => removeCartItem(item)}
												className='text-danger detail cart-action mt-md-1 p-2 mb-4'>
												{' '}
												Remove Item
											</button>
										</div>
									</div>
								);
							})
						) : (
							<div className='row'>
								<div className='col-12 col-lg-4 offset-lg-4 bg-white'>
									<h3 className='ipro text-dark text-center my-5'>
										Ipro-Signature
									</h3>

									<h5 className='text-center text-body my-5'>
										{' '}
										No Items in Cart{' '}
									</h5>
								</div>
							</div>
						)}

						{/*================= End of Cart Item Starts Here =======================*/}

						<section>
							<h2 className='text-center mt-5'>
								TOTAL PRICE: <del className='del'>N</del>
								{cartTotal}
							</h2>

							<div className='text-right mt-5'>
								<Link className='btn btn-success ml-5 my-3' to='/cart/checkout'>
									<i className='fas fa-long-arrow-alt-right'></i> Proceed TO
									CheckOut
								</Link>
							</div>
						</section>
					</div>
				</main>
			</div>
		</>
	);
};

export default Cart;

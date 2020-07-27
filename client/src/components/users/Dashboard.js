import React, { useContext, useEffect } from 'react';
import Navbar from '../templates/Navbar';
import NavGeneral from '../templates/NavGeneral';
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';
import Footer from '../templates/Footer';
import { OrderContext } from '../../contexts/OrderContext';
import { UserContext } from '../../contexts/UserContext';

const Dashboard = () => {
	const { authUser } = useContext(UserContext);
	const { orders, getUserOrders } = useContext(OrderContext);

	console.log(orders);
	useEffect(() => {
		getUserOrders(authUser.id);
		// console.log(authUser.id);
		// console.log(orders);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home &gt;{' '}
						</Link>{' '}
						<Link to='/men' className='site-font text-decoration-none'>
							User &gt;{' '}
						</Link>{' '}
						<Link
							to='/user/dashboard'
							className='site-font text-decoration-none'>
							Dashboard &gt;{' '}
						</Link>{' '}
						<Link
							to='#'
							className='active site-font
						text-decoration-none'>
							{' '}
							Username
						</Link>
						<h1 className='site-font my-4'>Dashboard </h1>
					</div>
				</section>

				<main className='container-fluid'>
					<div className='container-fluid px-sm-2'>
						<p>
							Account Name:{' '}
							<span className='text-danger account_name'>
								{' '}
								{authUser.firstname} {authUser.lastname}{' '}
							</span>{' '}
						</p>

						<section className='row'>
							<div className='col-sm-12 col-lg-4'>
								<div className='d-flex flex-column'>
									<div className='p-2 bg-dark text-white'>
										{' '}
										<u>PROFILE INFORMATION</u>
									</div>
									<div className='p-2 bd-highlight text-wrap profile-list'>
										{' '}
										<Link to='/' className='text-body'>
											Update Profile Information
										</Link>
									</div>
									<div className='p-2 bd-highlight profile-list'>
										{' '}
										<Link to='/' className='text-body'>
											Delivery Address{' '}
										</Link>
									</div>
									<div className='p-2 bd-highlight profile-list'>
										{' '}
										<Link to='/' className='text-body'>
											Tickets{' '}
										</Link>
									</div>
									<div className='p-2 bd-highlight profile-list'>
										{' '}
										<Link to='/' className='text-body'>
											Settings
										</Link>
									</div>
								</div>
							</div>

							<div className='col-sm-12 col-lg-8'>
								<div> </div>
							</div>
						</section>

						<section className='row'>
							<div className='col-12 col-lg-8 offset-lg-2'>
								<h5 className='site-font-lg mt-4'> Order History</h5>
								{orders.map((order) => {
									return (
										<div className='card my-5' key={order._id}>
											{/*=========== Card Order Header ================= */}

											<section className='row card-header m-0'>
												<div className='col-6'>
													<p className='text-dark site-font'>
														{' '}
														Order Date:{' '}
														<span className='site-font text-danger'>
															{order.orderDate}
														</span>
													</p>{' '}
												</div>

												<div className='col-6'>
													<p className='text-dark text-right site-font'>
														{' '}
														Delivery Status:{' '}
														<span className='site-font text-success'>
															{order.deliveryStatus}
														</span>
													</p>{' '}
												</div>
											</section>
											{/*==============End 0f Card Order Header ================== */}

											{/* ================== Card Order Body ======================*/}
											{order.products.map((item, index) => {
												return (
													<section
														className='row card-body align-items-end'
														key={index}>
														<div className='col-6'>
															<ul className='list-group list-group-flush'>
																<li className='list-group-item'>
																	<img
																		src={`/products/${item.imagePath}`}
																		className='order-img d-block'
																		alt='img-name'
																	/>
																	<div className='d-block'>{item.title}</div>
																	<div className='d-block'>
																		<small>{item.size}</small>
																	</div>
																	<div className='d-block'>
																		qty:<span>( {item.qty} )</span>{' '}
																	</div>
																</li>
															</ul>
														</div>
														<div className='col-6 '>
															<div className='text-right'>
																<del className='del'>N</del>
																{item.price}
															</div>
														</div>
													</section>
												);
											})}
											{/* ================== End of Card Order Body ======================*/}

											{/*======================= Card Footer =============================*/}
											<div className='card-footer'>
												<div className='row'>
													<div className='col-6'>
														<div className='font-weight-bold'>
															Order Total:
															<span>
																<del className='del'>N</del>
																{order.orderTotal}
															</span>
														</div>
													</div>

													<div className='col-6'>
														<p className='text-right text-success'>
															<small className='text-danger'>
																payment-status:{' '}
															</small>
															{order.paymentStatus}
														</p>
													</div>
												</div>
											</div>

											{/*======================= End of Card Footer =============================*/}
										</div>
									);
								})}
							</div>
						</section>
					</div>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default Dashboard;

import React from 'react';
import Navbar from '../templates/Navbar';
import NavGeneral from '../templates/NavGeneral';
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';
import Footer from '../templates/Footer';

const Dashboard = () => {
	return (
		<>
			<div>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home >{' '}
						</Link>{' '}
						<Link to='/men' className='site-font text-decoration-none'>
							User >{' '}
						</Link>{' '}
						<Link
							to='/user/dashboard'
							className='site-font text-decoration-none'>
							Dashboard >{' '}
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
							Account Name: <span> Tester 1 Test </span>{' '}
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
								<div className='card'>
									{/*=========== Card Order Header ================= */}
									<section className='row card-header m-0'>
										<div className='col-6'>
											<p className='text-dark site-font'>
												{' '}
												Order Date:{' '}
												<span className='site-font text-danger'>
													Monday, Friday, 3rd April, 2020{' '}
												</span>
											</p>{' '}
										</div>

										<div className='col-6'>
											<p className='text-dark text-right site-font'>
												{' '}
												Delivery Status:{' '}
												<span className='site-font text-success'>
													Delivering
												</span>
											</p>{' '}
										</div>
									</section>
									{/*==============End 0f Card Order Header ================== */}

									{/* ================== Card Order Body ======================*/}
									<section className='row card-body align-items-end'>
										<div className='col-6 '>
											<ul className='list-group list-group-flush'>
												<li className='list-group-item'>
													<img
														className='order-img d-block'
														src='/images/gown-pink.jpg'
														alt='img-name'
													/>
													<div className='d-block'>Ankara Shirt</div>
													<div className='d-block'>
														<small>mid</small>
													</div>
													<div className='d-block'>
														qty:<span>(5)</span>{' '}
													</div>
												</li>
											</ul>
										</div>
										<div className='col-6 '>
											<div className='text-right'>
												<del className='del'>N</del>
												3,500
											</div>
										</div>
									</section>

									{/* ================== End of Card Order Body ======================*/}

									{/*======================= Card Footer =============================*/}
									<div className='card-footer'>
										<div className='row'>
											<div className='col-6'>
												<div className='font-weight-bold'>
													Order Total:
													<span>
														<del className='del'>N</del>
														5, 000
													</span>
												</div>
											</div>

											<div className='col-6'>
												<p className='text-right text-success'>Paystack</p>
											</div>
										</div>
									</div>

									{/*======================= End of Card Footer =============================*/}
								</div>
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

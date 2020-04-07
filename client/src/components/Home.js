import React from 'react';
import Navbar from './templates/Navbar';
import { Link } from 'react-router-dom';
import Footer from './templates/Footer';

const Home = () => {
	return (
		<div className='m-0 p-0 wrapper bg-home container-fluid'>
			<Navbar />
			<div
				id='carouselExampleSlidesOnly'
				className='carousel slide'
				data-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src={`/images/Ifedayo-Fashion.jpg`}
							className='d-block w-100 j-image'
							alt='carousel-img'
						/>
					</div>

					<div className='carousel-item'>
						<img
							src={`/images/artem-bali.jpg`}
							className='d-block w-100 j-image'
							alt='carousel-img'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src={`/images/marcus-loke.jpg`}
							className='d-block w-100 j-image'
							alt='carousel-img'
						/>
					</div>
				</div>
			</div>

			<main className='container-fluid mt-5'>
				{/* ============================== Casual Wears Section ================================*/}
				<section className='card mx-lg-5 my-5 mx-md-0'>
					<h1 className=' card-title p-4'>Everyday Wears</h1>
					<hr />
					<div className='row p-lg-4 card-body'>
						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/shirt-jeans-casual-women-1.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/shirt-jeans-men-1.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/shirt-jeans-casual-women-4.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/shirt-jeans-men-2.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/jessica-castro-449555-unsplash.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/shirt-jeans-men-black-1.jpg'}
									alt='banner'
								/>
							</Link>
						</div>
					</div>
				</section>

				{/* =================================== End of Casual Wears =============================================*/}

				{/*================================== Business and Corporate Section ======================================*/}
				<section className='card mx-lg-5 my-5 mx-md-0'>
					<h1 className='card-title p-4'>Business and Coporate</h1>
					<hr />
					<div className='row card-body'>
						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/javier-reyes.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/women-business-1.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img'
									src={'/images/men-corporate-suit-1.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img'
									src={'/images/women-business-4.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img'
									src={'/images/men-corporate-suit-2.jpg'}
									alt='banner'
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img'
									src={'/images/women-corporate-gown-green.jpg'}
									alt='banner'
								/>
							</Link>
						</div>
					</div>
				</section>
				{/*=================================== End of Business and Corporate =======================================*/}

				{/* ================================== Nativity and Culture ================================================ */}
				<section className='card mx-lg-5 my-5 mx-md-0'>
					<h1 className='card-title p-4'>Nativity and Culture</h1>
					<hr />
					<div className='row card-body'>
						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img img-fluid'
								src={'/images/sleeveless-woman.jpg'}
								alt='banner'
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img img-fluid'
								src={'/images/tight-fitted-ankara.jpg'}
								alt='banner'
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/yellow-woman-ankara.jpg'}
								alt='banner'
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/ankara-shirt-men.jpg'}
								alt='banner'
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/native-women-fabulous.jpg'}
								alt='banner'
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img className='front-img' src={'/images/jidenna.jpg'} alt='' />
						</div>
					</div>
				</section>
				{/* ==================================== End of Nativity and Culture =====================================*/}

				{/*=================================== Advert Card Section  =============================================*/}

				<section className='mx-lg-5 mx-md-5'>
					<div className='row'>
						{/*1st Card*/}
						<div className='col-lg-6 col-md-12'>
							<div className='card'>
								<img src={'/images/help-support.jpg'} alt='banner' />
							</div>
						</div>

						{/*2nd Card*/}
						<div className='col-lg-6 col-md-12 support'>
							<div className='text-center mt-lg-5 mt-md-2'>
								<span className='site-ad-text'>
									Need Help Placing Orders????
								</span>
								<br />
								<span className='site-ad-text'>
									{' '}
									Call <span className='text-warning'>08100548455 now</span>
								</span>
								<br />
								<span className='small-ad-text'>Let us Assist you. </span>
							</div>
						</div>
					</div>
				</section>

				{/*=================================== End of Advert Card Section  =============================================*/}
			</main>

			<Footer />
		</div>
	);
};

export default Home;

import React from 'react';
import Navbar from './templates/Navbar';
import { Link } from 'react-router-dom';
import Footer from './templates/Footer';
import NavGeneral from './templates/NavGeneral';

const Home = () => {
	return (
		<div className='m-0 p-0 wrapper bg-home container-fluid'>
			<Navbar />
			<NavGeneral />

			<main className='container-fluid mt-5'>
				<section className='card mx-lg-5 my-5 mx-md-0'>
					{/*========================== Intro Section ===================================*/}
					<div className='row p-lg-4 card-body'>
						<div className='col-md-6 col-12 mb-3 leftSideIntro px-5'>
							<h1 className='text-right text-wrap'> Everything Clothing</h1>

							<p className='paraIntro'>
								{' '}
								Your fav <i className='fas fa-smile fa-2x'></i> fashion store
							</p>

							<div className='idleBtn text-center'> SHOP NOW</div>
						</div>

						<div className='col-md-6 col-12 mb-3 rightSideIntro px-5'>
							<div className='row'>
								<div className='col-md-6 col-6 Polo py-3 py-3 mb-5'>Polo</div>
								<div className='col-md-6 col-6 Skirts py-3  py-3 mb-5'>
									Skirts
								</div>

								<div className='w-100'> </div>

								<div className='col-md-6 col-6 Tshirt px-3 py-3 mb-5'>
									T-shirts
								</div>
								<div className='col-md-6 col-6 Trads px-3 py-3 mb-5'>Trads</div>

								<div className='w-100'> </div>
								<div className='col-md-6 col-6 Suits px-3 py-3 mb-5'>Suits</div>
								<div className='col-md-6 col-6 Pants px-3 py-3 mb-5'>Pants</div>
							</div>
						</div>
					</div>

					{/*========================== End of Intro Section ===================================*/}

					{/* ============================== Casual Wears Section ================================*/}
					<h1 className=' card-title p-4'>Everyday </h1>
					<hr />
					<div className='row p-lg-4 card-body'>
						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/purple-sweet-casaul-8500.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/venice-polo.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3 '>
							<Link to='/'>
								<img
									l
									className='front-img img-fluid'
									src={'/products/jessica-castro-449555-unsplash.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/paradise-polo.jpg'}
									alt='banner'
								/>
							</Link>

							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>
					</div>

					{/* =================================== End of Casual Wears =============================================*/}

					{/*================================== Business and Corporate Section ======================================*/}
					<h1 className=' card-title p-4'>Business </h1>
					<hr />
					<div className='row card-body'>
						<div className='col-lg-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/javier-reyes.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-lg-6 businessBanner col-12 mb-3'>
							<h2 className='text-white pt-3'> Business Trends</h2>
							<span className='text-white d-block'> New Design 2020</span>
							<small className='text-white d-block'> Shop Business</small>
						</div>

						<div className='col-lg-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img'
									src={'/products/illumination-marketing.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>
					</div>

					{/*=================================== End of Business and Corporate =======================================*/}

					{/* ================================== Nativity and Culture ================================================ */}

					<h1 className='card-title p-4'> Culture</h1>
					<hr />
					<div className='row card-body'>
						<div className='col-lg-3 col-md-6 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/sleeveless-woman.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-lg-3 col-md-6 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/tight-fitted-ankara.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-lg-6 col-12 mb-3 nativeBanner'>
							<div>
								<h2 className='text-white pt-3'>
									{' '}
									Owambe and Sophisticated Cultural Wears
								</h2>

								<p className='text-center text-warning paraIntro'>
									{' '}
									Be the <i className='fas fa-star'></i> of the party
								</p>
							</div>
						</div>
					</div>

					{/* ==================================== End of Nativity and Culture =====================================*/}

					{/*========================= Brand New Section =========================*/}

					<h1 className=' card-title p-4'>Brand New</h1>
					<hr />
					<div className='row p-lg-4 card-body'>
						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/shirt-jeans-casual-women-1.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/shirt-jeans-men-1.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3 '>
							<Link to='/'>
								<img
									l
									className='front-img img-fluid'
									src={'/products/jessica-castro-449555-unsplash.jpg'}
									alt='banner'
								/>
							</Link>
							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>

						<div className='col-md-3 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/products/shirt-jeans-men-black-1.jpg'}
									alt='banner'
								/>
							</Link>

							<p className='text-dark text-wrap itemPara'>
								Black Short Jeans Men{' '}
							</p>
							<span className='price'>
								{' '}
								<del className='del'>N </del>7, 000
							</span>
						</div>
					</div>
				</section>

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

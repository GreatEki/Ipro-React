import React, { useEffect } from 'react';
import Navbar from './templates/Navbar';
import Footer from './templates/Footer';
import NavGeneral from './templates/NavGeneral';
import HomeEveryDay from './templates/HomeEveryDay';
import HomeBusiness from './templates/HomeBusiness';
import HomeNative from './templates/HomeNative';
import HomeBrandNew from './templates/HomeBrandNew';
import '../css/home.css';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='m-0 p-0 wrapper bg-home container-fluid'>
			<Navbar />
			<NavGeneral />

			<main className='container-fluid mt-5'>
				<section className='card mx-lg-5 my-5 mx-md-0'>
					{/*========================== Intro Section ===================================*/}
					<div className='row p-lg-4 card-body'>
						<div className='col-md-6 col-12 mb-3 leftSideIntro'>
							<h1 className='text-right text-wrap'> Everything Clothing</h1>

							<p className='paraIntro'>
								{' '}
								Your fav <i className='fas fa-smile fa-2x'></i> fashion store
							</p>

							{/* <h2 to='/shop' className='idleBtn text-center'>
								Your Clothing Plug
							</h2> */}
						</div>

						<div className='col-md-6 col-12 mb-3  rightSideIntro px-5'>
							<div className='row'>
								<div className='col-md-6 col-6 Polo py-md-3 py-3 mb-5'>
									Polo
								</div>
								<div className='col-md-6 col-6 Skirts py-md-3  py-3 mb-5'>
									Skirts
								</div>

								<div className='w-100'> </div>

								<div className='col-md-6 col-6 Tshirt px-md-3 py-3 mb-5'>
									T-shirts
								</div>
								<div className='col-md-6 col-6 Trads px-3 py-md-3 mb-5'>
									Trads
								</div>

								<div className='w-100'> </div>
								<div className='col-md-6 col-6 Suits px-md-3 py-3 mb-5'>
									Suits
								</div>
								<div className='col-md-6 col-6 Pants px-md-3 py-3 mb-5'>
									Pants
								</div>
							</div>
						</div>
					</div>

					{/*========================== End of Intro Section ===================================*/}

					{/* ============================== Casual Wears Section ================================*/}
					<h1 className=' card-title p-4'>Everyday </h1>
					<hr />

					<HomeEveryDay />
					{/* =================================== End of Casual Wears =============================================*/}

					{/*================================== Business and Corporate Section ======================================*/}
					<h1 className=' card-title p-4'>Business </h1>
					<hr />

					<HomeBusiness />
					{/*=================================== End of Business and Corporate =======================================*/}

					{/* ================================== Nativity and Culture ================================================ */}

					<h1 className='card-title p-4'> Culture</h1>
					<hr />

					<HomeNative />
					{/* ==================================== End of Nativity and Culture =====================================*/}

					{/*========================= Brand New Section =========================*/}

					<h1 className=' card-title p-4'>Brand New</h1>
					<hr />

					<HomeBrandNew />
				</section>

				{/*=================================== Advert Card Section  =============================================*/}

				<section className='mx-lg-5 mx-md-5'>
					<div className='row'>
						{/*1st Card*/}
						<div className='col-md-6'>
							<div className='card'>
								<img src={'/images/help-support.jpg'} alt='banner' />
							</div>
						</div>

						{/*2nd Card*/}
						<div className='col-md-6 support'>
							<div className='text-center v-center mt-lg-5 mt-md-2'>
								<span className='site-ad-text '>
									Need Help Placing Orders????
								</span>
								<br />
								<span className='site-ad-text'>
									{' '}
									Call <i className='fas fa-phone'></i>{' '}
									<span className='text-warning'>08100548455 </span> now
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

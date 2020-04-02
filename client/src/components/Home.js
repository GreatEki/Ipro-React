import React from 'react';
import Navbar from './templates/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div
				id='carouselExampleSlidesOnly'
				className='carousel slide'
				data-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src={`/images/Ifedayo-Fashion.jpg`}
							className='d-block w-100 j-image'
							alt='...'
						/>
					</div>

					<div className='carousel-item'>
						<img
							src={`/images/artem-bali.jpg`}
							className='d-block w-100 j-image'
							alt='...'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src={`/images/marcus-loke.jpg`}
							className='d-block w-100 j-image'
							alt='...'
						/>
					</div>
				</div>
			</div>
			<Navbar />

			<main className='container-fluid mt-5'>
				{/* ============================== Casual Wears Section ================================*/}
				<section className='card mx-lg-5 my-5 mx-md-0'>
					<h1 className=' card-title p-4'>Casual English Wears Women</h1>
					<hr />
					<div className='row p-lg-4 card-body'>
						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/bbh-singapore-1414045-unsplash.jpg'}
									alt=''
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/english-wear-ladies-1.jpg'}
									alt=''
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/ian-dooley-pinkwall-347962-unsplash.jpg'}
									alt=''
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/malaysia.jpg'}
									alt=''
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/gown-pink.jpg'}
									alt=''
								/>
							</Link>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<Link to='/'>
								<img
									className='front-img img-fluid'
									src={'/images/jessica-castro-449555-unsplash.jpg'}
									alt=''
								/>
							</Link>
						</div>
					</div>
				</section>

				{/* Men's Section */}
				<section className='card mx-lg-5 my-5 mx-md-0'>
					<h1 className='card-title p-4'>Casual English Wears Men</h1>
					<hr />
					<div className='row card-body'>
						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img img-fluid'
								src={'/images/mean-shadows-685613-unsplash.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img img-fluid'
								src={'/images/tyler-nix-594397-unsplash.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/levi-alvarez-485070-unsplash.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/ankara-shirt-men.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/dark-mixed-blue-ankara.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img className='front-img' src={'/images/jidenna.jpg'} alt='' />
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
							<img
								className='front-img img-fluid'
								src={'/images/javier-reyes.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img img-fluid'
								src={'/images/women-business-1.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/men-corporate-suit-1.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/women-business-4.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/men-corporate-suit-2.jpg'}
								alt=''
							/>
						</div>

						<div className='col-lg-2 col-12 mb-3'>
							<img
								className='front-img'
								src={'/images/women-corporate-gown-green.jpg'}
								alt=''
							/>
						</div>
					</div>
				</section>
				{/*=================================== End of Business and Corporate =======================================*/}
			</main>
		</>
	);
};

export default Home;

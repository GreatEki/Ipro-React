import React, { useEffect } from 'react';
import Navbar from './templates/Navbar';
import Footer from './templates/Footer';
import Navwomen from './templates/Navwomen';
import { Link } from 'react-router-dom';
import '../css/menandwomen.css';
const Women = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<Navbar />
			<Navwomen />
			<main>
				<div className='container-fluid m-0 p-0'>
					<div className='section-1 women'>
						<div className='d-flex justify-content-center'>
							<div className='d-flex flex-column'>
								<h1>
									Women's<span>Place</span>
								</h1>
								<Link to='/women'>Elegance | Classy</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='container mt-lg-5 mt-0'>
					<div className='row my-5'>
						<div
							className='col-lg-6 col-md-6 my-5 justify-content-center'
							data-aos='fade-up'
							data-aos-easing='ease-in-sine'>
							<div className='card'>
								<img src='/products/dina.jpg' alt='' className='cat-images' />
								<div className='card-body'>
									<h4 className='cat-title'>Business and Office</h4>
									<p className='cat-desc'>Executive, Work, Smart</p>
									<Link className='btn-shop' to='/business/women'>
										Shop Now
									</Link>
								</div>
							</div>
						</div>

						<div
							className='col-lg-6 col-md-6 my-5 justify-content-center'
							data-aos='fade-left'
							data-aos-offset='500'
							data-aos-easing='ease-in-sine'>
							<div className='card'>
								<img
									src='/images/josue-escoto-1416198-unsplash.jpg'
									alt=''
									className='cat-images'
								/>
								<div className='card-body'>
									<h4 className='cat-title'>Everyday Wears</h4>
									<p className='cat-desc'>Casual, Active, Work, Smart</p>
									<Link className='btn-shop' to='/everyday/women'>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container mt-5'>
					<div className='row my-5'>
						<div
							className='col-lg-6 col-md-6 my-5 justify-content-center'
							data-aos='fade-up'
							data-aos-easing='ease-in-sine'>
							<div className='card'>
								<img
									src='/products/emma-valerio-1421389-unsplash.jpg'
									alt=''
									className='cat-images'
								/>
								<div className='card-body'>
									<h4 className='cat-title'>Culture</h4>
									<p className='cat-desc'>Unique, Exquisite, Sophisticated</p>
									<Link className='btn-shop' to='/culture/women'>
										Shop Now
									</Link>
								</div>
							</div>
						</div>

						<div
							className='col-lg-6 col-md-6 my-5 justify-content-center'
							data-aos='fade-down'
							data-aos-easing='ease-in-sine'
							data-aos-delay='500'>
							<div className='card'>
								<img
									src='/products/charisse-kenion-714752-unsplash.jpg'
									alt=''
									className='cat-images'
								/>
								<div className='card-body'>
									<h4 className='cat-title'>Vacation</h4>
									<p className='cat-desc'>Leisure, Recreation, Sporty</p>
									<Link className='btn-shop' to='/leisure/women'>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};
export default Women;

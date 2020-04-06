import React from 'react';
import Navbar from './templates/Navbar';
import Footer from './templates/Footer';
import Navmen from './templates/Navmen';
import { Link } from 'react-router-dom';

const Men = () => {
	return (
		<div className='container-fluid m-0 p-0'>
			<Navbar />
			<Navmen />
			<section>
				<div
					className='container-fluid m-0 p-0'
					data-aos='zoom-in'
					data-aos-delay='500'
					data-aos-easing='ease-in-sine'>
					<div className='section-1 men'>
						<div className='d-flex justify-content-center'>
							<div className='d-flex flex-column'>
								<h1>
									Men's<span>Place</span>
								</h1>
								<Link to=''>Magnificent | Stylish Men</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='container mt-5'>
				<div className='row my-5'>
					<section
						className='col-lg-6 col-md-6 my-5'
						data-aos='flip-down'
						data-aos-easing='ease-in-sine'>
						<div className='card'>
							<img
								src='images/mean-shadows-685613-unsplash.jpg'
								alt=''
								className='cat-images'
							/>
							<div className='card-body'>
								<h4 className='cat-title'>Everyday Wears</h4>
								<p className='cat-desc'>Casual, Active, Work, Smart</p>
								<Link className='btn-shop' to='/everyday/men'>
									Shop Now
								</Link>
							</div>
						</div>
					</section>

					<section
						className='col-lg-6 col-md-6 my-5'
						data-aos='flip-up'
						data-aos-delay='1000 '
						data-aos-easing='ease-in-sine'>
						<div className='card'>
							<img
								src='/images/javier-reyes.jpg'
								alt=''
								className='cat-images'
							/>
							<div className='card-body'>
								<h4 className='cat-title'>Business and Corporate</h4>
								<p className='cat-desc'>Executive, Business</p>
								<Link className='btn-shop' to='/business/men'>
									Shop Now
								</Link>
							</div>
						</div>
					</section>
				</div>
			</section>

			<div className='container'>
				<section className='row my-5'>
					<div className='col-lg-6 col-md-6 my-5' data-aos='flip-up'>
						<div className='card'>
							<img
								src='/images/special-occassion-style.jpg'
								alt=''
								className='cat-images'
							/>
							<div className='card-body'>
								<h4 className='cat-title'>Cultural Wears</h4>
								<p className='cat-desc'>Occassion, Nuptial</p>
								<Link className='btn-shop' to='/culture/men'>
									Shop Now
								</Link>
							</div>
						</div>
					</div>

					<div
						className='col-lg-6 col-md-6 my-5'
						data-aos='flip-down'
						data-aos-delay='500'>
						<div className='card'>
							<img
								src='images/tyler-nix-594397-unsplash.jpg'
								alt=''
								className='cat-images'
							/>
							<div className='card-body'>
								<h4 className='cat-title'>Leisure and Vacation</h4>
								<p className='cat-desc'>Holidays, Trips, Leisure</p>
								<Link className='btn-shop' to='/leisure/men'>
									Shop Now
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
};

export default Men;

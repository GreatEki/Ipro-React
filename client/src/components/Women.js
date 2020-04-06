import React from 'react';
import Navbar from './templates/Navbar';
import Footer from './templates/Footer';
import Navwomen from './templates/Navwomen';
import { Link } from 'react-router-dom';
const Women = () => {
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
								<Link href=''>Elegance | Classy</Link>
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
								<img src='/images/dina.jpg' alt='' className='cat-images' />
								<div className='card-body'>
									<h4 className='cat-title'>Business and Office</h4>
									<p className='cat-desc'>Executive Active, Work, Smart</p>
									<Link className='btn-shop' href='#'>
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
									<Link className='btn-shop' href='#'>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className='container-fluid m-0 p-0'
					data-aos='fade-up'
					data-aos-easing='ease-in-sine'>
					<div className='connect'>
						<div className='row'>
							<div className='col-lg-4 col-md-4 mt-3'>
								<img
									src='/images/nordwood-themes-359015-unsplash.jpg'
									alt=''
									className='my-5 ml-5'
								/>
							</div>
							<div className='col-lg-6 col-md-6 mt-5'>
								<h3 className='heading-1'>We make your clothes Unique!!!</h3>
								<p className=' lead text-muted'>
									With special and unique designs that stands you out, designs
									that speak to your uniqueness
								</p>
								<p className='text-muted'>
									You've got that special design pattern that you want? Give us
									a try and we will bring make that design a reality
								</p>
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
									src='/images/emma-valerio-1421389-unsplash.jpg'
									alt=''
									className='cat-images'
								/>
								<div className='card-body'>
									<h4 className='cat-title'>Culture</h4>
									<p className='cat-desc'>Unique, Exquisite, Sophisticated</p>
									<Link className='btn-shop' href='#'>
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
									src='/images/charisse-kenion-714752-unsplash.jpg'
									alt=''
									className='cat-images'
								/>
								<div className='card-body'>
									<h4 className='cat-title'>Vacation</h4>
									<p className='cat-desc'>Leisure, Recreation, Sporty</p>
									<Link className='btn-shop' href='#'>
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

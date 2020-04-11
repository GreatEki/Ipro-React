import React from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';
import Footer from './templates/Footer';
const Product = () => {
	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home >{' '}
						</Link>{' '}
						<Link to='/men' className='site-font text-decoration-none'>
							Product >{' '}
						</Link>{' '}
						<Link
							to='#'
							className='active site-font
						text-decoration-none'>
							{' '}
							Product-Category
						</Link>
						<h1 className='site-font my-4'>Product-type </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper px-lg-5 px-md-2 mt-5'>
					<section className='container my-5 py-5'>
						<div className='row bg-white'>
							<div className='col-lg-6 col-md-12 product-img mt-5'>
								<img
									src='/images/ankara-shirt-men.jpg'
									alt='prod-img'
									className='img-fluid'
								/>
							</div>

							<div className='col-lg-6 col-md-12 product-details mt-5'>
								<h2 className='product-title'> Ankara Shirt for Men </h2>

								<p>
									Section:<span className='text-warning'> Men</span>
								</p>
								<p>
									Brand:<span className='text-warning'> Unknown</span>
								</p>

								<h4>
									{' '}
									<del className='del'>N </del> 3, 500
								</h4>

								<div className='d-flex flew-row my-5'>
									<div className='p-1 font-weight-bold'> SIZE: </div>
									&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
									<div>
										<button className='btn-sm mx-2 btn-size bg-white'>
											{' '}
											sm{' '}
										</button>
										<button className='btn-sm mx-2 btn-size bg-white'>
											{' '}
											mid{' '}
										</button>
										<button className='btn-sm mx-2 btn-size bg-white'>
											{' '}
											lg
										</button>
										<button className='btn-sm mx-2 btn-size bg-white'>
											{' '}
											x-lg
										</button>
										<button className='btn-sm mx-2 btn-size bg-white'>
											xx-lg{' '}
										</button>
									</div>
								</div>

								<div className='d-flex flex-row'>
									<div className='font-weight-bold p-1'>Quantity: </div>
									&nbsp; &nbsp; &nbsp;
									<div>
										<button className='btn-sm bg-white'> - </button>
										<button className='btn-sm bg-white'> 1 </button>
										<button className='btn-sm bg-white'> + </button>
									</div>
								</div>

								<div className='row'>
									<div className='col-lg-6 col-12'>
										<button className='btn btn-md btn-success btn-block  rounded-0 my-5 px-5'>
											{' '}
											Buy Now{' '}
										</button>
									</div>

									<div className='col-lg-6 col-12'>
										<div className='my-5 px-4 text-muted font-weight-bold'>
											<i className='fas fa-heart '></i> Save for Later
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Product;

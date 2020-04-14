import React from 'react';
import Navbar from '../templates/Navbar';
import NavGeneral from '../templates/NavGeneral';
import { Link } from 'react-router-dom';
const SignUp = () => {
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
							User >{' '}
						</Link>{' '}
						<Link
							to='#'
							className='active site-font
						text-decoration-none'>
							{' '}
							Sign-Up
						</Link>
						<h1 className='site-font my-4'>Sign-Up </h1>
					</div>
				</section>

				<div className='container-fluid content-wrapper'>
					<div className='container'>
						<div className='row my-5'>
							<div className='col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12 bg-white my-5 py-5 auth-form-container'>
								<h5 className='text-center ipro'> Sign-Up </h5>
								<form className='form auth-form px-lg-2 px-md-2'>
									<p className='site-font my-3'>
										{' '}
										It only takes a few minutes. Join US today!!!{' '}
									</p>
									<div className='form-group my-4'>
										<label
											htmlFor='firstname'
											className='text-muted font-weight-bolder'>
											FIRSTNAME{' '}
										</label>
										<input
											type='text'
											className='form-control rounded-pill font-weight-bolder'
											required
										/>
									</div>
									<div className='form-group my-4'>
										<label
											htmlFor='firstname'
											className='text-muted font-weight-bolder'>
											LASTNAME{' '}
										</label>
										<input
											type='text'
											className='form-control rounded-pill'
											required
										/>
									</div>
									<div className='form-group my-4'>
										<label
											htmlFor='firstname'
											className='text-muted font-weight-bolder'>
											EMAIL{' '}
										</label>
										<input
											type='email'
											className='form-control rounded-pill'
											required
										/>
									</div>
									<div className='form-group my-4'>
										<label
											htmlFor='firstname'
											className='text-muted font-weight-bolder'>
											PASSWORD{' '}
										</label>
										<input
											type='password'
											className='form-control rounded-pill'
											required
										/>
									</div>
									<section className='btn-section'>
										<div className='row'>
											<div className='col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12'>
												<div className='form-group'>
													<button className='btn btn-block btn-success rounded-0'>
														{' '}
														JOIN{' '}
													</button>
												</div>
											</div>
										</div>
									</section>
								</form>

								<p>
									{' '}
									Already have an account?{' '}
									<Link to='/users/signin'>Sign-In </Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;

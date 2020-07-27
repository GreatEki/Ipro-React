import React, { useContext } from 'react';
import Navbar from '../templates/Navbar';
import NavGeneral from '../templates/NavGeneral';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const SignIn = () => {
	const {
		handleSignInSubmit,
		msg,
		email,
		password,
		setEmail,
		setPassword,
	} = useContext(UserContext);

	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<NavGeneral />

				<section className='container-fluid bg-white'>
					<div className='py-3'>
						<Link to='/' className='site-font text-decoration-none'>
							Home &gt;{' '}
						</Link>{' '}
						<Link to='/men' className='site-font text-decoration-none'>
							User &gt;{' '}
						</Link>{' '}
						<Link
							to='#'
							className='active site-font
						text-decoration-none'>
							{' '}
							Sign-In
						</Link>
						<h1 className='site-font my-4'>Sign-In </h1>
					</div>
				</section>

				<div className='container-fluid content-wrapper'>
					<div className='container'>
						<div className='row my-5'>
							<div className='col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12 bg-white my-5 py-5 auth-form-container'>
								{msg ? (
									<small className='text-center text-danger'> {msg}</small>
								) : (
									<p> </p>
								)}
								<h5 className='text-center ipro'> Sign-In </h5>
								<form
									onSubmit={(e) => handleSignInSubmit(e)}
									className='form auth-form px-lg-2 px-md-2'>
									<p className='site-font my-3'> Manage your account. </p>

									<div className='form-group my-4'>
										<label
											htmlFor='firstname'
											className='text-muted font-weight-bolder'>
											EMAIL{' '}
										</label>
										<input
											type='email'
											name='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
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
											name='password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className='form-control rounded-pill'
											required
										/>
									</div>
									<section className='btn-section'>
										<div className='row'>
											<div className='col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12'>
												<div className='form-group'>
													<button
														type='submit'
														className='btn btn-block btn-success rounded-0'>
														{' '}
														ENTER{' '}
													</button>
												</div>
											</div>
										</div>
									</section>
								</form>

								<p>
									{' '}
									Don't have an account? <Link to='/users/signup'>SignUp </Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;

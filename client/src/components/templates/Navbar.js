import React from 'react';

const Navbar = () => {
	return (
		<div className='container-fluid m-0 p-0'>
			<nav className='navbar navbar-expand-lg navbar-light bg-white'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#mainNavBar'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<a href='/' className='navbar-brand m-md-0'>
					<span className='ipro text-dark ml-5'>Ipro-Signature</span>
				</a>

				<div className='collapse navbar-collapse'></div>
				<div className='collapse navbar-collapse' id='mainNavBar'>
					<div className='navbar-nav'>
						<a href='/' className='nav-item nav-link'>
							Home
						</a>
						<a href='/about' className='nav-item nav-link '>
							About US
						</a>
						<a href='/men' className='nav-item nav-link'>
							{' '}
							MEN
						</a>
						<a href='/women' className='nav-item nav-link'>
							WOMEN
						</a>
						<a href='/contact' className='nav-item nav-link'>
							Contact Us
						</a>
					</div>

					<div className='collapse navbar-collapse'></div>
					<div className='navbar-nav'>
						<a href='' className='nav-item nav-link'>
							<i className='fas fa-heart'></i>
						</a>
					</div>

					<ul className='navbar-nav  dropdown mr-lg-5 m-md-0'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropDown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<i className='fas fa-user'></i>
						</a>

						<div className='dropdown-menu' aria-labelledby='navbarDropDown'>
							<a href='' className='dropdown-item'>
								Sign-In
							</a>
							<a href='' className='dropdown-item'>
								Register
							</a>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

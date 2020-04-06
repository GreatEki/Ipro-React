import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className='container-fluid m-0 p-0'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#mainNavBar'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<Link to='/' className='navbar-brand m-md-0'>
					<span className='ipro text-dark ml-5'>Ipro-Signature</span>
				</Link>

				<div className='collapse navbar-collapse'></div>
				<div className='collapse navbar-collapse' id='mainNavBar'>
					<div className='navbar-nav'>
						<Link to='/' className='nav-item nav-link'>
							Home
						</Link>
						<Link to='/about' className='nav-item nav-link '>
							About US
						</Link>
						<Link to='/men' className='nav-item nav-link'>
							{' '}
							MEN
						</Link>
						<Link to='/women' className='nav-item nav-link'>
							WOMEN
						</Link>
						<Link to='/contact' className='nav-item nav-link'>
							Contact Us
						</Link>
					</div>

					<div className='collapse navbar-collapse'></div>
					<div className='navbar-nav'>
						<Link to='/' className='nav-item nav-link'>
							<i className='fas fa-heart'></i>
						</Link>
					</div>

					<ul className='navbar-nav  dropdown mr-lg-5 m-md-0'>
						<Link
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropDown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<i className='fas fa-user'></i>
						</Link>

						<div className='dropdown-menu' aria-labelledby='navbarDropDown'>
							<Link href='' className='dropdown-item'>
								Sign-In
							</Link>
							<Link href='' className='dropdown-item'>
								Register
							</Link>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

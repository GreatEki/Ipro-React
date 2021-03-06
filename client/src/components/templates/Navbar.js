import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import '../../css/Nav.css';
const Navbar = () => {
	const { cartItems } = useContext(CartContext);
	const { isAuth, logout } = useContext(UserContext);
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
							HOME
						</Link>
						{isAuth ? (
							<Link to='/users/auth/dashboard' className='nav-item nav-link '>
								ACCOUNT
							</Link>
						) : (
							<p> </p>
						)}

						<Link to='/shop' className='nav-item nav-link '>
							SHOP
						</Link>
						<Link to='/men' className='nav-item nav-link'>
							{' '}
							MEN
						</Link>
						<Link to='/women' className='nav-item nav-link'>
							WOMEN
						</Link>
						{/* <Link to='/contact' className='nav-item nav-link'>
							Contact Us
						</Link> */}
					</div>

					<div className='collapse navbar-collapse'></div>
					<div className='navbar-nav'>
						<Link
							to='/cart/overview'
							className='nav-item nav-link border cart-btn'
							type='button'>
							<span className='badge badge-success p-2'>
								{' '}
								{cartItems.length}
							</span>{' '}
							Shopping Cart <i className='fas fa-shopping-basket'></i>
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
							to='#'
							id='navbarDropDown'
							role='button'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<i className='fas fa-user'></i>
						</Link>

						<div className='dropdown-menu' aria-labelledby='navbarDropDown'>
							{isAuth ? (
								<div>
									<Link
										to='/users/auth/dashboard'
										className='dropdown-item site-font'>
										Account
									</Link>

									<button
										onClick={() => logout()}
										className='dropdown-item text-danger site-font'>
										Logout
									</button>
								</div>
							) : (
								<div>
									<Link to='/users/signin' className='dropdown-item site-font'>
										Sign-In
									</Link>
									<Link to='/users/signup' className='dropdown-item site-font'>
										Join
									</Link>
								</div>
							)}
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

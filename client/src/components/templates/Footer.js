import React from 'react';
import '../../css/footer.css';

const Footer = () => {
	return (
		<div className='container-fluid mt-5 bg-footer p-0 mb-0'>
			<div className='container'>
				<div className='row'>
					<div className='footer-content about mt-5 col-md-12'>
						<p className='footer-font text-justify text-wrap'>
							At Ipro-Signature (blw247) is your modern store that brings you
							the latest trend in Fashion. For every ocassion, we have varieties
							of clothing that makes you unique and attractive. Casual Wears,
							Jeans, Corporate Clothing, Business wears, Culture attires,
							Owambe, vacation, Leisure and Recreation we have them in store for
							you. Giving you high quality delivery and a fantastic customer
							experience.
						</p>
					</div>
				</div>
			</div>

			<div className='container mt-3'>
				<div className='footer'>
					<section className='footer-content links row my-3'>
						<div className='col-md-10 offset-md-1'>
							<ul className='footer-nav footer-font'>
								<li>
									<a href='/'>Home</a> <span>|</span>{' '}
								</li>
								<li>
									<a href='/services'> Shop </a> <span>|</span>
								</li>
								<li>
									<a href='/cart/overview'> Men </a> <span>|</span>
								</li>
								<li>
									<a href='/shop'> Women </a> <span>|</span>
								</li>
								<li>
									<a href='/contact'>Contact-US</a>{' '}
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>

			<div className='container'>
				<section className='footer-section Contact-Us'>
					<p className='text-center'>
						<i className='fas fa-envelope'></i>{' '}
						<span className='site-font'> contact-us@ipro-signatures.com</span>
					</p>
					<p className='text-center'>
						<i className='fas fa-phone'></i>{' '}
						<span className='site-font'> +234 (0)810 054 8455</span>
					</p>
					<h4 className='mt-3 text-center'> Connect With US </h4>
					<div className='d-flex flex-row justify-content-center'>
						<a href='/' className='text-center mx-2 text-dark'>
							<i className='fab fa-facebook fa-3x'></i>{' '}
						</a>
						<a href='/' className='text-center mx-2 text-dark'>
							{' '}
							<i className='fab fa-instagram fa-3x'></i>{' '}
						</a>
					</div>
				</section>
			</div>
			<div className='footer-bottom mt-3'>
				<div>
					<p className='text-center'>
						{' '}
						&copy; betacodes.com | Ekene Victor 2020
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

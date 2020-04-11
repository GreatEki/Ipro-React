import React from 'react';
import { Link } from 'react-router-dom';
const NavGeneral = () => {
	return (
		<>
			<div className='container-fluid nav-wrapper m-0 p-0'>
				<ul className='nav nav-fill sm-nav m-0 p-0'>
					<li className='nav-item'>
						<Link to='/everyday/' className='nav-link text-white'>
							{' '}
							Everyday Wears
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/business/' className='nav-link text-white'>
							{' '}
							Business and Corporate
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/culture/' className='nav-link text-white'>
							{' '}
							Nativity and Culture
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/' className='nav-link text-white'>
							{' '}
							Leisure{' '}
						</Link>
					</li>
				</ul>
				<div className='container-fluid theme-bar m-0 p-0'>
					<div className='nav '>
						<form className='form-inline input-group  justify-content-center p-2 my-2 my-lg-0'>
							<div className='input-group search-input'>
								<input
									type='text'
									className='form-control'
									placeholder='Search for products, brands and categories'
									aria-label='Input group example'
									aria-describedby='btnGroupAddon2'
								/>
								<div className='input-group-prepend'>
									<button
										className='input-group-text bg-success text-white'
										id='btnGroupAddon2'>
										<i className='fas fa-search'></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavGeneral;

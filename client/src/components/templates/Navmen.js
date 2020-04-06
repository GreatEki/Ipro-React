import React from 'react';
import { Link } from 'react-router-dom';
const Navmen = () => {
	return (
		<>
			<div className='container-fluid nav-wrapper m-0 p-0'>
				<ul className='nav nav-fill sm-nav m-0 p-0'>
					<li className='nav-item'>
						<Link to='/everyday/men' className='nav-link text-white'>
							{' '}
							Everyday Wears
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/business.men' className='nav-link text-white'>
							{' '}
							Business and Corporate
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/culture/men' className='nav-link text-white'>
							{' '}
							Nativity and Culture
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/men' className='nav-link text-white'>
							{' '}
							Leisure{' '}
						</Link>
					</li>
				</ul>
				<div className='container-fluid theme-bar m-0 p-0'>
					<div className='nav '>
						<form class='form-inline  justify-content-center p-2 my-2 my-lg-0'>
							<input
								className='form-control mr-sm-2 search-input'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button className='btn btn-success my-2 my-sm-0' type='submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navmen;

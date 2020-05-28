import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Nav.css';
import { SearchContext } from '../../contexts/SearchContext';
const NavGeneral = () => {
	const { handleInput, val } = useContext(SearchContext);
	return (
		<>
			<div className='container-fluid nav-wrapper m-0 p-0'>
				<ul className='nav nav-fill sm-nav m-0 p-0'>
					<li className='nav-item'>
						<Link to='/everyday/' className='nav-link text-white sm-link'>
							{' '}
							Everyday Wears
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/business/' className='nav-link text-white sm-link'>
							{' '}
							Business and Corporate
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/culture/' className='nav-link text-white sm-link'>
							{' '}
							Nativity and Culture
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/' className='nav-link text-white sm-link'>
							{' '}
							Leisure{' '}
						</Link>
					</li>
				</ul>
				<div className='container-fluid search-bar m-0 p-0'>
					<div className='nav '>
						<form className='form-inline input-group  justify-content-center p-2 my-2 my-lg-0'>
							<div className='input-group search-input m-0'>
								<input
									type='text'
									className='form-control searchText d-inline'
									onChange={(e) => handleInput(e)}
									required
									placeholder='Search for products, brands and categories'
								/>
								<Link
									to={`/search/${val}`}
									className='input-group-text bg-success text-white d-inline'
									id='btnGroupAddon2'>
									<i className='fas fa-search'></i>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavGeneral;

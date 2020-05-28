import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Nav.css';
import { SearchContext } from '../../contexts/SearchContext';
const Navwomen = () => {
	const { handleInput, val } = useContext(SearchContext);
	return (
		<>
			<div className='container-fluid nav-wrapper m-0 p-0'>
				<ul className='nav nav-fill sm-nav m-0 p-0'>
					<li className='nav-item'>
						<Link to='/everyday/women' className='nav-link text-white sm-link'>
							{' '}
							Everyday Wears
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/business/women' className='nav-link text-white sm-link'>
							{' '}
							Business and Corporate
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/culture/women' className='nav-link text-white sm-link'>
							{' '}
							Nativity and Culture
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/women' className='nav-link text-white sm-link'>
							{' '}
							Leisure{' '}
						</Link>
					</li>
				</ul>
				<div className='container-fluid search-bar m-0 p-0'>
					<div className='nav '>
						<form className='justify-content-center p-2 my-2 my-lg-0 w-100'>
							<div className='d-flex flex-row searchBar justify-content-center'>
								<input
									className='d-inline m-0 searchText'
									onChange={(e) => handleInput(e)}
									value={val}
									required
									placeholder='Search for products, brands and categories'
								/>
								<Link
									to={`/search/${val}`}
									className='d-inline m-0 p-2 searchLink'
									role='btn'>
									<i className='fas fa-search 2x text-center'></i>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navwomen;

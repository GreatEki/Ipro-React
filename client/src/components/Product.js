import React, { useContext, useEffect } from 'react';
import Navbar from './templates/Navbar';
import NavGeneral from './templates/NavGeneral';
import { Link } from 'react-router-dom';
import Footer from './templates/Footer';
import { ProductsContext } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContext';
const Product = (props) => {
	const id = props.match.params.id;

	const { getProduct, product } = useContext(ProductsContext);
	const { addToCart, handleQty, handleSize, size, qty } = useContext(
		CartContext
	);

	useEffect(() => {
		getProduct(id);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const handleAddToCart = (e) => {
		e.preventDefault();
		addToCart(product, size, qty);
	};
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
						<Link
							to={`/product/${product.title}/${product.id}`}
							className='site-font text-decoration-none'>
							Product >{' '}
						</Link>{' '}
						<Link
							to={`/product/${product.title}/${product.id}`}
							className='active site-font
						text-decoration-none'>
							{' '}
							Product-Category
						</Link>
						<h1 className='site-font my-4'>Product-type </h1>
					</div>
				</section>

				<main className='container-fluid content-wrapper px-lg-5 px-md-2 mt-5'>
					<section className='container my-5 py-5'>
						<div className='row bg-white'>
							<div className='col-lg-6 col-md-12 product-img mt-5'>
								<img
									src={`/products/${product.imagePath}`}
									alt='prod-img'
									className='img-fluid product-img'
								/>
							</div>

							<div className='col-lg-6 col-md-12 product-details mt-5'>
								<h2 className='product-title'> {product.title} </h2>

								<p>
									Section:
									<span className='text-warning'> {product.category}</span>
								</p>
								<p>
									Brand:<span className='text-warning'> {product.brand}</span>
								</p>

								<h4>
									{' '}
									<del className='del'>N </del> {product.price}
								</h4>

								<div className='d-flex flew-row my-5'>
									<div className='p-1 font-weight-bold'> SIZE: </div>
									&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
									<div>
										<button
											className='btn-sm mx-2 btn-size bg-white'
											name='sm'
											value={size}
											onClick={(e) => handleSize(e)}>
											{' '}
											sm{' '}
										</button>
										<button
											className='btn-sm mx-2 btn-size bg-white'
											name='mid'
											value={size}
											onClick={(e) => handleSize(e)}>
											{' '}
											mid{' '}
										</button>
										<button
											className='btn-sm mx-2 btn-size bg-white'
											name='lg'
											value={size}
											onClick={(e) => handleSize(e)}>
											{' '}
											lg
										</button>
										<button
											className='btn-sm mx-2 btn-size bg-white'
											name='x-lg'
											value={size}
											onClick={(e) => handleSize(e)}>
											{' '}
											x-lg
										</button>
										<button
											className='btn-sm mx-2 btn-size bg-white'
											name='xx-lg'
											value={size}
											onClick={(e) => handleSize(e)}>
											xx-lg{' '}
										</button>
									</div>
								</div>

								<div className='d-flex flex-row'>
									<div className='font-weight-bold p-1'>Quantity: </div>
									&nbsp; &nbsp; &nbsp;
									<div>
										<button
											className='btn-sm bg-white'
											name='minus'
											value={qty}
											onClick={(e) => handleQty(e)}>
											{' '}
											-{' '}
										</button>
										<button className='btn-sm bg-white'> {qty} </button>
										<button
											className='btn-sm bg-white'
											name='add'
											value={qty}
											onClick={(e) => handleQty(e)}>
											{' '}
											+{' '}
										</button>
									</div>
								</div>

								<div className='row'>
									<div className='col-lg-6 col-12'>
										<button
											onClick={(e) => handleAddToCart(e)}
											className='btn btn-md btn-success btn-block  rounded-0 my-5 px-5'>
											{' '}
											Buy Now{' '}
										</button>
									</div>

									<div className='col-lg-6 col-12'>
										<div className='my-5 px-4 text-muted font-weight-bold wish-btn role-btn'>
											<i className='fas fa-heart'></i> Save for Later
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Product;

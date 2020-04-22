import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartAlert = () => {
	const { msgPop, ifNewItem } = useContext(CartContext);

	if (ifNewItem) {
		return (
			<div className='container justify-content-center mt-5'>
				<div className='row'>
					<div className='col-12 col-md-4 offset-md-4'>
						<div className=' alert alert-light'>
							<i className='fas fa-thumbs-up fa-2x'></i>
							<h5 className='text-center text-success'>{msgPop.message} </h5>
							<img src={`/products/${msgPop.image}`} className='cart-image' />
							<p className='d-inline'> {msgPop.title}</p>
							<p className='text-center text-success'>
								{' '}
								<del className='del'>N </del> {msgPop.price}{' '}
							</p>
							size: <small> {msgPop.size}</small>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div className='container'></div>;
	}
};

export default CartAlert;

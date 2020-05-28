import React from 'react';

const ErrorPage = () => {
	return (
		<div>
			<div className='row bg-home ErrorBox'>
				<div className='col-12 col-md-4 offset-md-4 bg-white ErrorMsg '>
					<div className=''>
						{' '}
						<i className='fas fa-exclamation-triangle fa-9x'></i>
					</div>
					<h3 className=' text-dark text-center my-5'>An Error Occurred</h3>

					<h5 className='text-center text-body my-5'>
						{' '}
						Oops Something went wrong{' '}
					</h5>
					<div className='text-center text-body my-5'>
						{' '}
						<span className='text-danger font-weight-bold p-2'> HINT:</span>
						Check your internet connection
					</div>
					<button className='text-white btn-lg  retry'> Retry</button>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;

import React from 'react';

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className=''>
			<h2>Auth Navbar Here</h2>
			<div className='py-[0.09rem] min-h-screen '>{children}</div>
			<footer className='bg-gray-800 text-white py-4 text-center'>
				<p>Auth Footer Here</p>
			</footer>
		</div>
	);
};

export default AuthLayout;

import React from 'react';

const DashboardPage = () => {
	return (
		<div>
			<h1 className='text-2xl font-bold'>Dashboard Page</h1>
			<p className='text-gray-600'>This is the dashboard page.</p>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<h2 className='text-xl font-semibold'>User Dashboard</h2>
				<p className='text-gray-500'>User details will be displayed here.</p>
			</div>
		</div>
	);
};

export default DashboardPage;

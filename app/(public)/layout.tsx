'use client';
import NavBar from '@/components/layouts/Public/NavBar';
import Sidebar from '@/components/layouts/Public/Sidebar';
import React from 'react';

const HomeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<NavBar />
			<Sidebar />
			<main className='min-h-[53vh] md:min-h-[61vh]  lg:ml-64 [&::-webkit-scrollbar]:hidden scrollbar-none'>
				{children}
			</main>
		</div>
	);
};

export default HomeLayout;

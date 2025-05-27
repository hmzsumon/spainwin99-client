'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo1 from '@/public/images/logo/logo_desktop.png';
import Logo2 from '@/public/images/logo/logo_mobile.png';
import localFont from 'next/font/local';

import Link from 'next/link';
import Sidebar from './Sidebar';
import { AlignLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { openSidebar } from '@/redux/features/ui/sidebarSlice';

const beaufortLol = localFont({
	src: '../../../app/fonts/BeaufortforLOL-Regular.ttf',
});

const NavBar = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleClick = () => {
		throw new Error('🔥 Critical server failure! Unexpected crash occurred.');
	};

	return (
		<div className='sticky w-full top-0 border-b-stb-border/40 border-b header z-50 px-4 py-3  '>
			<div className='flex justify-between items-center'>
				{/* Start Logo and Sidebar Trigger */}
				<div className='flex items-center gap-1'>
					<button className='lg:hidden' onClick={() => dispatch(openSidebar())}>
						<AlignLeft className='w-6 h-6 text-white' />
					</button>
					<div className='hidden md:block cursor-pointer'>
						<Image
							src={Logo1}
							alt='pyc logo'
							className='w-24'
							onClick={() => router.push('/')}
						/>
					</div>
					<div className='md:hidden cursor-pointer'>
						<Image
							src={Logo2}
							alt='pyc logo'
							className='w-14'
							onClick={() => router.push('/')}
						/>
					</div>
				</div>
				{/* End Logo */}

				<div className={` ${beaufortLol.className} flex gap-2`}>
					<Link href='/login'>
						<button className='button button--secondary w-20 h-9'>
							<span className='uppercase text-sm'>Log in</span>
						</button>
					</Link>
					<Link href='/register'>
						<button className='button button--secondary w-24 h-9'>
							<span className='uppercase text-sm'>Register</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

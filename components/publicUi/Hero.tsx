'use client';
import React from 'react';
import HeroImg1 from '@/public/images/hero/hero_img.png';
import HeroImg2 from '@/public/images/hero/hero_img2.png';
import HeroImg3 from '@/public/images/hero/hero_img3.png';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	const handleClick = () => {
		throw new Error('🔥 Critical server failure! Unexpected crash occurred.');
	};
	return (
		<div>
			<div className=''>
				<div className=' hidden md:block'>
					<Link href='/casino'>
						<Image
							src={HeroImg1}
							alt='Hero Image 1'
							className='object-cover w-full h-full'
						/>
					</Link>
				</div>
				<div className=' -mt-24 md:hidden'>
					<Link href='/casino'>
						<Image
							src={HeroImg3}
							alt='Hero Image 1'
							className=' w-full h-full'
							onClick={handleClick}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;

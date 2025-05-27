'use client';
import React from 'react';
import HeroImg1 from '@/public/images/hero/hero_img.png';
import HeroImg2 from '@/public/images/hero/hero_img2.png';
import HeroImg3 from '@/public/images/hero/hero_img3.png';
import Image from 'next/image';

const Hero = () => {
	const handleClick = () => {
		throw new Error('🔥 Critical server failure! Unexpected crash occurred.');
	};
	return (
		<div>
			<div className=''>
				<div className=' hidden md:block'>
					<Image
						src={HeroImg1}
						alt='Hero Image 1'
						className='object-cover w-full h-full'
					/>
				</div>
				<div className=' -mt-24 md:hidden'>
					<Image
						src={HeroImg3}
						alt='Hero Image 1'
						className=' w-full h-full'
						onClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

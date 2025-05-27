'use client';
import React from 'react';
import CasinoBg from '@/public/images/live-casino/live_casino_bg.jpg';
import Img1 from '@/public/images/live-casino/live_casino_1.png';
import Img2 from '@/public/images/live-casino/live_casino_2.png';
import Img3 from '@/public/images/live-casino/live_casino_3.png';
import Img4 from '@/public/images/live-casino/live_casino_4.png';
import Img5 from '@/public/images/live-casino/live_casino_5.png';
import Img6 from '@/public/images/live-casino/live_casino_6.png';
import Img7 from '@/public/images/live-casino/live_casino_7.png';
import CasinoIcon from '@/public/images/icons/live-casino.svg';

import CornerFrame from '../cornerFrame/CornerFrame';
import Link from 'next/link';

const liveCasinoItems = [
	{ image: Img1, text: 'Top Live' },
	{ image: Img2, text: 'Roulette' },
	{ image: Img3, text: 'Blackjack' },
	{ image: Img4, text: 'International' },
	{ image: Img5, text: 'Bonus Buys' },
	{ image: Img6, text: 'Live Games' },
	{ image: Img7, text: 'MegaWays' },
];

const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
	<div className='flex items-center gap-2'>
		<span
			className='w-6 h-6'
			style={{
				backgroundColor: 'rgb(173 126 55)',
				maskImage: `url(${icon})`,
				WebkitMaskImage: `url(${icon})`,
				maskSize: 'cover',
				WebkitMaskSize: 'cover',
			}}
		/>
		<span className='text-xl font-semibold'>{title}</span>
	</div>
);

const LiveCasinoMenu = () => {
	const handleClick = () => {
		throw new Error('🔥 Critical server failure! Unexpected crash occurred.');
	};
	return (
		<div className='px-4 space-y-4 mt-4'>
			<SectionTitle icon={CasinoIcon.src} title='Live Casino' />
			<div className='overflow-x-auto scrollbar-hide h-60'>
				<div className='flex gap-4 w-max'>
					{liveCasinoItems.map((item, index) => (
						<Link key={index} href='/casino' className='cursor-pointer'>
							<CornerFrame
								key={index}
								image1={CasinoBg.src}
								image2={item.image.src}
								text={item.text}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default LiveCasinoMenu;

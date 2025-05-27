'use client';
import React from 'react';
import CornerFrame from '../cornerFrame/CornerFrame';
import CasinoIcon from '@/public/images/icons/games.svg';
import Img1_1 from '@/public/images/casino/casino_1_1.jpg';
import Img1_2 from '@/public/images/casino/casino_1_2.jpg';
import Img2_1 from '@/public/images/casino/casino_2_1.jpg';
import Img2_2 from '@/public/images/casino/casino_2_2.jpg';
import Img3_1 from '@/public/images/casino/casino_3_1.jpg';
import Img3_2 from '@/public/images/casino/casino_3_2.jpg';
import Img4_1 from '@/public/images/casino/casino_4_1.jpg';
import Img4_2 from '@/public/images/casino/casino_4_2.jpg';
import Img5_1 from '@/public/images/casino/casino_5_1.jpg';
import Img5_2 from '@/public/images/casino/casino_5_2.jpg';
import Img6_1 from '@/public/images/casino/casino_6_1.jpg';
import Img6_2 from '@/public/images/casino/casino_6_2.jpg';
import Img7_1 from '@/public/images/casino/casino_7_1.jpg';
import Img7_2 from '@/public/images/casino/casino_7_2.jpg'; // Optional if grouped imports
import Link from 'next/link';

const casinoItems = [
	{ image1: Img1_1, image2: Img1_2, text: 'Top' },
	{ image1: Img2_1, image2: Img2_2, text: 'New' },
	{ image1: Img3_1, image2: Img3_2, text: 'Popular' },
	{ image1: Img4_1, image2: Img4_2, text: 'Exclusive' },
	{ image1: Img5_1, image2: Img5_2, text: 'Bonus Buys' },
	{ image1: Img6_1, image2: Img6_2, text: 'Live Games' },
	{ image1: Img7_1, image2: Img7_2, text: 'MegaWays' },
];

const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
	<div className='flex items-center gap-2'>
		<span
			className='w-5 h-5'
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

const CasinoMenu = () => {
	return (
		<div className='px-4 space-y-4 mt-4'>
			<SectionTitle icon={CasinoIcon.src} title='Casino' />
			<div className='overflow-x-auto scrollbar-hide h-56'>
				<div className='flex gap-4 w-max'>
					{casinoItems.map((item, index) => (
						<Link key={index} href='/casino' className='cursor-pointer'>
							{' '}
							<CornerFrame
								key={index}
								image1={item.image1.src}
								image2={item.image2.src}
								text={item.text}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default CasinoMenu;

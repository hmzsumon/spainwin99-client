'use client';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';
import { AlignLeft, HomeIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '@/redux/features/ui/sidebarSlice';
import Divider from './Divider';
import PromotionIcon from '@/lib/icons/PromotionIcon';
import Link from 'next/link';

const menuItems = [
	{
		id: 1,
		label: 'Promotions',
		icon: '/images/icons/promotion.svg',
		href: '/promotions',
	},
	{
		id: 2,
		label: 'Home',
		icon: '/images/icons/home.svg',
		href: '/',
	},
	{
		id: 3,
		label: 'Casino',
		icon: '/images/icons/games.svg',
		href: '/casino',
	},
	{
		id: 4,
		label: 'Live Casino',
		icon: '/images/icons/live-casino.svg',
		href: '/casino/live-casino',
	},
	{
		id: 5,
		label: 'Jackpots',
		icon: '/images/icons/jackpots.svg',
		href: '/casino/jackpots',
	},
	{
		id: 6,
		label: 'Sports',
		icon: '/images/icons/sports-sportsbook.svg',
		href: '/sports',
	},
	{
		id: 7,
		label: 'Live Betting',
		icon: '/images/icons/sports-live-sports.svg',
		href: '/sports/live-betting',
	},
	{
		id: 8,
		label: 'Challenge',
		icon: '/images/icons/challenges.svg',
		href: '/challenges',
	},
	{
		id: 9,
		label: 'Tournaments',
		icon: '/images/icons/tournament.svg',
		href: '/tournaments',
	},
	{
		id: 11,
		label: 'Shop',
		icon: '/images/icons/shop.svg',
		href: '/shop',
	},
	{
		id: 12,
		label: 'VIP Levels',
		icon: '/images/icons/bonus.svg',
		href: '/vip-levels',
	},
];

const Sidebar = () => {
	const isOpen = useSelector((state: any) => state.sidebar.isOpen);
	const dispatch = useDispatch();
	return (
		<>
			{/* Mobile Sidebar Button + Sheet */}
			<div className='lg:hidden mt-20 p-2'>
				<Sheet open={isOpen} onOpenChange={() => dispatch(closeSidebar())}>
					<SheetContent
						side='left'
						className='w-full border-none !top-[64px] max-h-[calc(100vh-64px)] overflow-y-auto bg-stb-green [&>button]:hidden z-40'
					>
						<nav className='mt-4 space-y-2'>
							{menuItems.map((item) => (
								<Link
									key={item.id}
									href={item.href || '#'}
									className='relative group flex items-center gap-3 p-3 rounded-md w-full hover:bg-[#0f362e] transition-all duration-300'
								>
									{/* Hover Border */}
									<span
										className='absolute inset-0 pointer-events-none rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'
										style={{
											backgroundImage: `linear-gradient(90deg, rgba(255,215,0,0.4), rgba(255,215,0,0.05)), linear-gradient(90deg, rgba(255,215,0,0.4), rgba(255,215,0,0.05))`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'top left, bottom left',
											backgroundSize: '100% 1px, 100% 1px',
										}}
									></span>

									{/* Icon */}
									{item.icon && (
										<div
											className='w-5 h-5 bg-[#8fa8a5] group-hover:bg-gradient-to-r from-yellow-400 to-yellow-200 transform transition-transform duration-300 group-hover:scale-110'
											style={{
												maskImage: `url(${item.icon})`,
												WebkitMaskImage: `url(${item.icon})`,
												maskSize: 'cover',
												WebkitMaskSize: 'cover',
												maskRepeat: 'no-repeat',
												WebkitMaskRepeat: 'no-repeat',
											}}
										/>
									)}

									{/* Label */}
									<span className='text-white text-sm font-medium'>
										{item.label}
									</span>
								</Link>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>

			{/* Desktop Sidebar */}
			<aside className='hidden lg:block fixed top-16 left-0 w-64 h-full bg-stb-green border-r-stb-border/40 border-r shadow-sm z-10'>
				<nav className='mt-4 space-y-2'>
					{menuItems.map((item) => (
						<Link
							key={item.id}
							href={item.href || '#'}
							className='relative group flex items-center gap-3 p-3 rounded-md  w-full  hover:bg-[#0f362e] transition-all duration-300'
						>
							{/* Highlight Border on Hover */}
							<span
								className='absolute w-full  inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'
								style={{
									backgroundImage: `linear-gradient(90deg, rgba(255,215,0,0.4), rgba(255,215,0,0.05)),
                            linear-gradient(90deg, rgba(255,215,0,0.4), rgba(255,215,0,0.05))`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'top left, bottom left',
									backgroundSize: '100% 1px, 100% 1px',
									width: '100%',
								}}
							></span>

							{/* Icon */}
							{item.icon && (
								<div
									className='w-5 h-5 bg-[#8fa8a5] group-hover:bg-gradient-to-r from-yellow-400 to-yellow-200 transform transition-transform duration-300 group-hover:scale-110'
									style={{
										maskImage: `url(${item.icon})`,
										WebkitMaskImage: `url(${item.icon})`,
										maskSize: 'cover',
										WebkitMaskSize: 'cover',
										maskRepeat: 'no-repeat',
										WebkitMaskRepeat: 'no-repeat',
									}}
								/>
							)}

							{/* Text */}
							<span className='text-white text-sm font-medium'>
								{item.label}
							</span>
						</Link>
					))}
				</nav>

				<div className='mt-4'>
					<Divider />
				</div>
			</aside>
		</>
	);
};

export default Sidebar;

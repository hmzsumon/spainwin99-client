'use client';
import Image from 'next/image';
import Logo1 from '@/public/images/logo/logo_desktop.png';
import Logo2 from '@/public/images/logo/logo_mobile.png';
import * as React from 'react';
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
	House,
	CreditCard,
	Users,
	BookMarked,
	Award,
	HandCoins,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar';
import { useSelector } from 'react-redux';

// This is sample data.
const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	navMain: [
		{
			title: 'Overview',
			url: '#',
			icon: House,
			isActive: true,
			items: [
				{
					title: 'Dashboard',
					url: '/dashboard',
				},
				{
					title: 'Home',
					url: '/',
				},
			],
		},
		{
			title: 'Payments',
			url: '#',
			icon: CreditCard,
			items: [
				{
					title: 'Add Funds',
					url: '/deposit',
				},
				{
					title: 'Withdraw',
					url: '/withdraw',
				},
			],
		},
		{
			title: 'Plans',
			url: '#',
			icon: HandCoins,
			items: [
				{
					title: 'All Plans',
					url: '/all-plans',
				},
				{
					title: 'My Plans',
					url: '/my-plans',
				},
			],
		},
		{
			title: 'Team View',
			url: '#',
			icon: Users,
			items: [
				{
					title: '1St Level',
					url: '/team-view/1st-level',
				},
				{
					title: '2nd Level',
					url: '/team-view/2nd-level',
				},
				{
					title: '3rd Level',
					url: '/team-view/3rd-level',
				},
				{
					title: '4th Level',
					url: '/team-view/4th-level',
				},
			],
		},
		{
			title: 'Reports',
			url: '#',
			icon: BookMarked,
			items: [
				{
					title: 'Recent Transaction',
					url: '/reports/transactions',
				},
				{
					title: 'Balance Summary',
					url: '#',
				},
				{
					title: 'Add Fund Report',
					url: '#',
				},
				{
					title: 'Withdraw Report',
					url: '#',
				},
			],
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings2,
			items: [
				{
					title: 'Profile',
					url: '/settings/profile',
				},
				{
					title: 'Security ',
					url: '/settings/security',
				},
			],
		},
	],
	projects: [
		{
			name: 'Rank Rewards',
			url: '/rank-reward',
			icon: Award,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useSelector((state: any) => state.auth);

	return (
		<Sidebar collapsible='icon' {...props} className='w-64 '>
			<SidebarHeader>
				<div className='flex items-center justify-center h-10 -ml-9 mt-2'>
					<Image src={Logo1} alt='Logo' className=' w-36' />
				</div>
			</SidebarHeader>
			<SidebarContent className='bg-gray-900'>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter className='bg-gray-900'>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

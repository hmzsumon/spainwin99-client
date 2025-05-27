import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import StoreProvider from './StoreProvider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'SpainWin99',
	description: 'Your Ultimate Online Gaming Destination',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className='dark'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning={true}
			>
				<StoreProvider>
					<div className='flex flex-col  bg-wrapper  '>{children}</div>
					<Toaster />
				</StoreProvider>
			</body>
		</html>
	);
}

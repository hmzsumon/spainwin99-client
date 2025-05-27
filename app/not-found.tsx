import React from 'react';
import Link from 'next/link';
import { IoHome } from 'react-icons/io5';

const NotFound = () => {
	return (
		<main className='min-h-screen bg-black flex items-center justify-center px-4'>
			<div className='bg-[#2a0909] border border-red-700 text-red-300 w-full max-w-xl p-6 rounded-lg shadow-lg'>
				<h1 className='text-2xl font-bold mb-2 flex items-center gap-2'>
					<span className='text-red-500 text-3xl'>🔥</span>
					Critical server failure!
				</h1>
				<p className='text-sm text-red-200'>
					Unexpected crash occurred. Please try again later.
				</p>

				<div className='mt-4 p-3 bg-red-950 rounded text-xs text-red-100 whitespace-pre-wrap'>
					{`Error: ECONNREFUSED
Stack Trace:
  at fetchData (utils/fetch.ts:24)
  at async HomePage (app/page.tsx:15)
  at callHandler (internal/runtime.ts:42)`}
				</div>
			</div>
		</main>
	);
};

export default NotFound;

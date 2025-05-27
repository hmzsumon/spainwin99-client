'use client';
import React, { useState } from 'react';
import './NavIcon.css'; // Assuming you have a CSS file for styles

export default function NavIcon() {
	const [hovered, setHovered] = useState(false);

	return (
		<div className='nav-list__wrap'>
			<div
				className='nav-list__mask'
				style={{
					transform: hovered ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
				}}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			/>
		</div>
	);
}

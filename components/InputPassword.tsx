'use client';

import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

type InputProps = {
	id: string;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	autoComplete?: string;
	type?: string;
	className?: string;
};

const InputPassword: React.FC<InputProps> = ({
	id,
	label,
	placeholder = '',
	value,
	onChange,
	error,
	autoComplete = 'off',
	type = 'password',
	className = '',
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};
	return (
		<div className='list-none'>
			<div className='space-y-2'>
				<label htmlFor={id} className='form-control__label'>
					{label}
				</label>

				<div className='relative mt-2'>
					<input
						id={id}
						autoComplete={autoComplete}
						type={showPassword ? 'text' : type}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
						className={`form-control__input  ${className}`}
						data-testid={id}
					/>
					<button
						type='button'
						onClick={togglePasswordVisibility}
						className='absolute right-2 z-50 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none'
					>
						{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
					</button>
				</div>
			</div>

			{error && <p className='text-xs mt-1 text-red-500'>{error}</p>}
		</div>
	);
};

export default InputPassword;

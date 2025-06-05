import React from 'react';

type InputWithLabelErrorProps = {
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

const InputWithLabelError: React.FC<InputWithLabelErrorProps> = ({
	id,
	label,
	placeholder = '',
	value,
	onChange,
	error,
	autoComplete = 'off',
	type = 'text',
	className = '',
}) => {
	return (
		<div className='list-none'>
			<div className='space-y-2'>
				<label htmlFor={id} className='form-control__label'>
					{label}
				</label>
				<input
					id={id}
					autoComplete={autoComplete}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`form-control__input border  ${className}`}
					data-testid={id}
				/>
			</div>

			{error && <p className='text-xs mt-1 text-red-500'>{error}</p>}
		</div>
	);
};

export default InputWithLabelError;

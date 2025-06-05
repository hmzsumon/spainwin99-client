import React from 'react';

const PromoCheckbox = ({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<label className='form-checkbox text-xs'>
			<input
				type='checkbox'
				data-testid='receivePromo'
				className='input-hidden form-checkbox__input'
				checked={checked}
				onChange={onChange}
			/>
			<span className='form-checkbox__body'>
				<span className='form-checkbox__indicator' />
				<span className='form-checkbox__text'>
					I accept the{' '}
					<a
						href='/en/privacy-policy'
						target='_blank'
						className='text-underline link link--primary'
					>
						Privacy Notice
					</a>
					, and would also like to receive bonuses, promotions, news or other
					relevant information periodically by any channel of communication.
				</span>
			</span>
		</label>
	);
};

export default PromoCheckbox;

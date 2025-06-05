import React from 'react';

const TermsCheckbox = ({
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
				data-testid='termsConditionsAgeGdpr'
				className='input-hidden form-checkbox__input'
				checked={checked}
				onChange={onChange}
			/>
			<span className='form-checkbox__body'>
				<span className='form-checkbox__indicator' />
				<span className='form-checkbox__text'>
					I am 18 years old and I accept the{' '}
					<a
						href='/en/rules'
						target='_blank'
						rel='noopener noreferrer'
						className='text-underline link link--primary'
					>
						Terms &amp; Conditions
					</a>{' '}
					and{' '}
					<a
						href='/en/privacy-policy'
						target='_blank'
						rel='noopener noreferrer'
						className='text-underline link link--primary'
					>
						Privacy Notice
					</a>
				</span>
			</span>
		</label>
	);
};

export default TermsCheckbox;

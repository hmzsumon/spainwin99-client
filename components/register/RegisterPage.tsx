'use client';
import React, { useState } from 'react';
import './Register.css';
import InputWithLabelError from '../InputWithLabelError';
import InputPassword from '../InputPassword';
import PromoCheckbox from '../PromoCheckbox';
import TermsCheckbox from '../TermsCheckbox';

const RegisterPage = () => {
	const [receivePromo, setReceivePromo] = useState(true);
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		referralCode: '',
	});

	const [formErrors, setFormErrors] = useState({
		fullName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (field: string, value: string) => {
		setFormData({ ...formData, [field]: value });
		setFormErrors({ ...formErrors, [field]: '' }); // Clear error on change
	};

	const validate = () => {
		let errors: any = {};
		if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
		if (!formData.email.includes('@')) errors.email = 'Enter a valid email';
		if (!/^\d{10,15}$/.test(formData.phone))
			errors.phone = 'Enter a valid phone number';
		if (formData.password.length < 6)
			errors.password = 'Minimum 6 characters required';
		if (formData.confirmPassword !== formData.password)
			errors.confirmPassword = 'Passwords do not match';

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = () => {
		if (!validate()) return;
		console.log('✅ Submitted Data:', formData);
		// Submit logic here...
	};

	return (
		<div>
			<div className='dialog md:w-6/12 mx-auto'>
				<div className='dialog-inner'>
					<div className='dialog-header z-100'>
						<div className='dialog-header__title'>Registration</div>
					</div>

					<div className='dialog-body'>
						<div className='delimiter'></div>
						<div className='dialog-form'>
							<div className='dialog-subtitle'>
								<span className='dialog-subtitle__text'>
									Already have an account?
								</span>
								<button
									className='text-underline dialog-subtitle__link link link--primary'
									type='button'
								>
									Log in
								</button>
							</div>

							{/* 🔽 Registration Fields */}
							<div className='space-y-3'>
								<InputWithLabelError
									id='fullName'
									label='Full Name'
									placeholder='Enter your full name'
									value={formData.fullName}
									onChange={(e) => handleChange('fullName', e.target.value)}
									error={formErrors.fullName}
									type='text'
									autoComplete='name'
									className=''
								/>

								<InputWithLabelError
									id='email'
									label='Email'
									placeholder='Enter your email'
									type='email'
									value={formData.email}
									onChange={(e) => handleChange('email', e.target.value)}
									error={formErrors.email}
								/>

								<InputWithLabelError
									id='phone'
									label='Phone Number'
									placeholder='Enter your phone number'
									type='tel'
									value={formData.phone}
									onChange={(e) => handleChange('phone', e.target.value)}
									error={formErrors.phone}
								/>

								<InputPassword
									id='password'
									label='Password'
									placeholder='Enter your password'
									value={formData.password}
									onChange={(e) => handleChange('password', e.target.value)}
									error={formErrors.password}
								/>

								<InputPassword
									id='confirm-password'
									label='Confirm Password'
									placeholder='Re-enter your password'
									value={formData.confirmPassword}
									onChange={(e) =>
										handleChange('confirmPassword', e.target.value)
									}
									error={formErrors.confirmPassword}
								/>

								<InputWithLabelError
									id='referral-code'
									label='Referral Code (Optional)'
									placeholder='Enter referral code'
									autoComplete='off'
									value={formData.referralCode}
									onChange={(e) => handleChange('referralCode', e.target.value)}
									error='' // Optional field – no validation
								/>
							</div>
						</div>
						<div className='mt-5 flex flex-col gap-2'>
							<TermsCheckbox
								checked={acceptedTerms}
								onChange={(e) => setAcceptedTerms(e.target.checked)}
							/>
							<PromoCheckbox
								checked={receivePromo}
								onChange={(e) => setReceivePromo(e.target.checked)}
							/>
						</div>
					</div>

					<div className='dialog-action'>
						<div className='button--center'>
							<button
								className='dialog-action-button button button--primary button--s'
								type='button'
								onClick={handleSubmit}
							>
								<span className='button__title'>Register</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;

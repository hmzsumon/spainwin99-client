'use client';
import React, { useState } from 'react';
import '../register/Register.css';
import InputWithLabelError from '../InputWithLabelError';
import InputPassword from '../InputPassword';
import PromoCheckbox from '../PromoCheckbox';
import TermsCheckbox from '../TermsCheckbox';
import Link from 'next/link';

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: '',

		password: '',
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

		if (!formData.email.includes('@')) errors.email = 'Enter a valid email';

		if (formData.password.length < 6)
			errors.password = 'Minimum 6 characters required';

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
						<div className='dialog-header__title'>Login</div>
					</div>

					<div className='dialog-body'>
						<div className='delimiter'></div>
						<div className='dialog-form'>
							<div className='dialog-subtitle'>
								<span className='dialog-subtitle__text'>
									Don't have an account?
								</span>
								<button
									className='text-underline dialog-subtitle__link link link--primary'
									type='button'
								>
									Register Now
								</button>
							</div>

							{/* 🔽 Registration Fields */}
							<div className='space-y-3'>
								<InputWithLabelError
									id='email_1'
									label='Email'
									placeholder='Enter your email'
									type='email'
									value={formData.email}
									onChange={(e) => handleChange('email', e.target.value)}
									error={formErrors.email}
								/>

								<InputPassword
									id='password_1'
									label='Password'
									placeholder='Enter your password'
									value={formData.password}
									onChange={(e) => handleChange('password', e.target.value)}
									error={formErrors.password}
								/>
							</div>
						</div>
					</div>

					<div className='dialog-action'>
						<Link href='/login-2' className='button--center'>
							<button
								className='dialog-action-button button button--primary button--s'
								type='button'
								onClick={handleSubmit}
							>
								<span className='button__title'>Login</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

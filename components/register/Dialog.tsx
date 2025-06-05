'use client';
import React from 'react';
import './Register.css'; // Assuming you have a CSS file for styles
import InputWithLabelError from '../InputWithLabelError';

const Dialog = () => {
	return (
		<div>
			<div>
				{/* 🔲 Dialog Container */}
				<div className='dialog md:w-6/12 mx-auto'>
					<div className='dialog-inner '>
						{/* 🔲 Header Section (Title + Close Button) */}
						<div className='dialog-header z-100'>
							<div className='dialog-header__title'>Registration</div>
							<div>
								<button className='dialog-close' type='button'>
									<span className='dialog-close__inner'>
										{/* ✖️ Close Button Icon */}
										<img alt='' src='/images/popup-close.svg' />
									</span>
								</button>
							</div>
						</div>

						{/* 🔲 Modal Body */}
						<div className='dialog-body '>
							<div className='delimiter'></div>

							{/* 🔗 Login Prompt */}
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
								{/* 📋 Registration Form */}
							</div>
						</div>

						{/* 🔲 Dialog Action Section (Choose Button) */}
						<div className='dialog-action'>
							<div className='button--center'>
								<button
									className='dialog-action-button button button--primary button--s'
									type='button'
								>
									<span className='button__title'>Register</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialog;

import Container from '@/components/Container';
import LoginPage from '@/components/login/LoginPage';
import RegisterPage from '@/components/register/RegisterPage';
import React from 'react';

const Register = () => {
	return (
		<div className='-mt-20 md:mt-20'>
			<Container>
				<LoginPage />
			</Container>
		</div>
	);
};

export default Register;

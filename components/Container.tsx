import React from 'react';

import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return <div className='p-4'>{children}</div>;
};

export default Container;

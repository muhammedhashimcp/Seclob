import React from 'react';
import IconCard from './IconCard';
import { services } from '@/constants';

const Services = () => {
	return (
		<div className="h-screen flex-1 my-8   w-full ">
			<div className="grid grid-cols-4  sm:grid-cols-6 md:grid-cols-9 gap-3 max-w-[1000px]  bg-gradient-to-b from-app_blue to-app-dark-blue rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-10 mx-2 md:mx-auto">
				{services.map((service, index) => (
					<IconCard
						key={index}
						text={service.name}
						icon={service.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;

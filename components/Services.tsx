import React from 'react';
import IconCard from './IconCard';
import { HeartIcon, UserIcon, WrenchIcon } from '@heroicons/react/24/solid';
import { services } from '@/constants';

const Services = () => {
	return (
		<div className="h-screen flex-1 my-8   w-full ">
			<div className="grid grid-cols-9 gap-3 max-w-[1000px] mx-auto bg-gradient-to-b from-app_blue to-app-dark-blue rounded-[3rem] p-10 ">
				{services.map((service,index) => (
					<IconCard key={index} text={service.name} icon={service.icon} />
				))}
			</div>
		</div>
	);
};

export default Services;

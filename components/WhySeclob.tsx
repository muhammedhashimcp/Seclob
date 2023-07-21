import React from 'react';
import { whySeclobData } from '@/constants';
import SeclobIconCard from './cards/SeclobIconCard';


const WhySeclob = () => {
	return (
		<div className="h-screen flex-1 my-8   w-full bg-app-light-gray ">
			<div className="max-w-[1000px] mx-2 lg:mx-auto ">
				<div className="flex justify-between items-center my-4">
					<p className="text-app-dark-blue">Why Seclob?</p>
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-6  gap-3 max-w-[1000px] mx-auto py-6 sm:py-10 ">
					{whySeclobData.map((service, index) => (
						<SeclobIconCard
							key={index}
						text={service.name} 
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhySeclob;

import { vehicleServices } from '@/constants';
import React from 'react';
import ServiceCard from './cards/ServiceCard';


const VehicleServices = () => {
	return (
		<div className="w-full  bg-app-light-green ">
			<div className="flex-1  max-w-[1000px] my-4 mx-2   lg:mx-auto">
				<div className="flex justify-between items-center my-4">
					<p className="text-app_blue">Vehicle Services</p>
					<button className="text-app_green">View more</button>
				</div>
				<div className="grid grid-cols-3  sm:grid-cols-5 gap-2 sm:gap-8 max-w-[1000px] mx-auto">
					{vehicleServices.map((service, index) => (
						<ServiceCard
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

export default VehicleServices;

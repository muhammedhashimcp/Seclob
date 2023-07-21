import { vehicleServices } from '@/constants';
import React from 'react';
import ServiceCard from './ServiceCard';

const VehicleServices = () => {
	return (
		<div className="w-full  bg-app-light-green ">
			<div className="flex-1 mx-auto  max-w-[1000px] my-4">
				<div className='flex justify-between items-center my-4'>
					<p className='text-app_blue'>Vehicle Services</p>
					<button className='text-app_green'>View more</button>
				</div>
				<div className="grid grid-cols-5 gap-8 max-w-[1000px] mx-auto">
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

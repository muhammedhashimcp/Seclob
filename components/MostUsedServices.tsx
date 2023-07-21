import React from 'react';

import HomeServiceCard from './HomeServiceCard';
import { homeServices, mostUsedServices } from '@/constants';
import Image from 'next/image';
import MostUsedCard from './MostUsedCard';

const MostUsedServices = () => {
	return (
		<div className="w-full   my-4 ">
			<div className=" max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6 lg:gap-8 mx-2 "> 
				<div className="bg-app-light-green w-full flex-1  rounded-md">
					<div className="flex justify-between items-center ">
						<p className="text-app_blue my-2">Most Used services</p> 
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full  mx-auto">
						{mostUsedServices.map((service, index) => (
							<MostUsedCard
								key={index}
								text={service.name}
								icon={service.icon}
							/>
						))}
					</div>
				</div>
				<div className="w-full flex-grow h-full ">
					<Image
						src="/libraries.png"
						alt="librar"
						className="rounded-xl w-full h-full "
						width={100}
						height={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default MostUsedServices;

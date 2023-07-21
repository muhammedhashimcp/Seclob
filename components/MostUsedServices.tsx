import React from 'react';

import HomeServiceCard from './HomeServiceCard';
import { homeServices, mostUsedServices } from '@/constants';
import Image from 'next/image';
import MostUsedCard from './MostUsedCard';

const MostUsedServices = () => {
	return (
		<div className="w-full  flex max-w-[1000px]   mx-auto   my-4 gap-8 ">
			<div className="bg-app-light-green w-50 flex-1 p-4 rounded-md">
				<div className="flex justify-between items-center ">
					<p className="text-app_blue my-2">Most Used services</p>
				</div>
				<div className="grid grid-cols-4 gap-2  mx-auto">
					{mostUsedServices.map((service, index) => (
						<MostUsedCard
							key={index}
							text={service.name}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
			<div className="w-50 flex-grow h-full ">
				<Image
					src="/libraries.png"
					alt="librar"
					className="rounded-xl w-full"
					width={100}
					height={100}
				/>
			</div>
		</div>
	);
};

export default MostUsedServices;


import React from 'react';

import HomeServiceCard from './HomeServiceCard';
import { homeServices } from '@/constants';

const HomeServices = ({title}) => {
	return (
		<div className="w-full  bg-app-light-green my-6">
			<div className="flex-1 mx-auto  max-w-[1000px] my-4">
				<div className="flex justify-between items-center my-4">
					<p className="text-app_blue">{title}</p>
				</div>
				<div className="grid grid-cols-4 gap-8 max-w-[1000px] mx-auto">
					{homeServices.map((service, index) => (
						<HomeServiceCard
							key={index}
							text={service.name}
							img={service.img}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeServices;

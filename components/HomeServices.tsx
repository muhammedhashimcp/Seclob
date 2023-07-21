import React from 'react';
import HomeServiceCard from './cards/HomeServiceCard';
import { homeServices } from '@/constants';
interface HomeServicesProps {
	title: string;
}
const HomeServices: React.FC<HomeServicesProps> = ({ title }) => {
	return (
		<div className="w-full  bg-app-light-green my-6">
			<div className="flex-1 mx-2 lg:mx-auto  max-w-[1000px] my-4 ">
				<div className="flex justify-between items-center my-4 ">
					<p className="text-app-dark-blue font-bold ">{title}</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-[1000px] mx-auto">
					{homeServices.map((service, index) => (
						<HomeServiceCard key={index} text={service.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeServices;

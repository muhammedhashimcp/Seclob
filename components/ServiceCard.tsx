import { IIconCard } from '@/types';
import React from 'react'

const ServiceCard = ({ text, icon: IconComponent }: IIconCard) => {
	return (
		<div className="w-full flex-auto items-center justify-center bg-app-light-blue rounded-3xl shadow-md px-5">
			<div className="flex items-center justify-center   mx-auto ">
				<a href="#">
					<IconComponent className="w-20 h-full" />
				</a>
			</div>
			<div className="text-center my-2 ">
				<p className="text-sm  font-semibold text-white">{text}</p>
			</div>
		</div>
	);
};

export default ServiceCard
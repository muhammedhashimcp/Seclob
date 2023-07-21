import { IIconCard } from '@/types';
import React from 'react';

const MostUsedCard = ({ text, icon: IconComponent }: IIconCard) => {
	return (
		<div className="w-full flex-auto items-center justify-center bg-light-white-100 rounded-xl shadow-md ">
			<div className="flex-1">
				<div className="flex items-center mx-auto justify-center h-16 w-16  mt-4 bg-white rounded-full shadow-md">
					<a href="#">
						<IconComponent className="w-8 h-8" />
					</a>
				</div>
				<div className="text-center my-2 ">
					<p className="text-xs whitespace-nowrap text-app-dark-blue font-semibold text-gray">
						{text}
					</p>
					<p className="text-[8px] text-gray  font-semibold text-gray">
						Seclob Service <br/> at Kochi
					</p>
				
				</div>
			</div>
			<div className="text-center py-1 bg-app_green rounded-b-xl bottom-0">
				<p className="text-[10px] text-white font-semibold text-gray">
					20 minutes ago...
				</p>
			</div>
		</div>
	);
};

export default MostUsedCard;

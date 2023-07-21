
import React from 'react';

import HomeServiceCard from './HomeServiceCard';
import { IStoreComp } from '@/types';
import StoreCard from './StoreCard';

const StoreComp = ({ title,data }: IStoreComp) => {
	return (
		<div className="w-full  bg-app-light-green my-6">
			<div className="flex-1 mx-auto  max-w-[1000px] my-4">
				<div className="flex justify-between items-center my-4">
					<p className="text-app_blue">{title}</p>
				</div>
				<div className="grid grid-cols-4 gap-8 max-w-[1000px] mx-auto">
					{data.map((item, index) => (
						<StoreCard
							key={index}
							title={item.title}
							img={item.img}
							price={item.price}
							mrp={item.mrp}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoreComp;

import React from 'react';
import { IStoreComp } from '@/types';
import StoreCard from './cards/StoreCard';


const StoreComp = ({ title, data }: IStoreComp) => {
	return (
		<div className="w-full  bg-app-light-green my-6">
			<div className="flex-1  max-w-[1000px] my-4 mx-2 lg:mx-auto  ">
				<div className="flex justify-between items-center my-4">
					<p className="text-app-dark-blue font-bold">{title}</p>
				</div>
				<div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 md:gap-4 lg:gap-8 max-w-[1000px] mx-auto">
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

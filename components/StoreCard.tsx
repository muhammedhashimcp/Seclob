
import { IStoreData } from '@/types';
import React from 'react';


const StoreCard = ({ title, img ,price,mrp}: IStoreData) => {
	return (
		<div
			className="w-full h-60   rounded-3xl bg-cover bg-center flex flex-col-reverse"
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className="text-center h-auto  py-1 mt-auto bg-app_green rounded-3xl bottom-0 ">
				<div className="mt-auto  ">
					<p className="text-sm  font-semibold text-gray my-1 text-white ">
						{title}
					</p>
				</div>
				<p className=" text-yellow-600 font-semibold "> 
					<span className="text-sm mr-2">{price}/-</span>{' '}
					<span className="text-white text-xs">{mrp}</span>
				</p>
			</div>
		</div>
	);
};

export default StoreCard;

import { IServiceCard } from '@/types';
import React from 'react';
interface IHomeServiceCard{
	 text:string
 }
const HomeServiceCard = ({ text }: IHomeServiceCard) => {
	return (
		<div
			className="w-full h-60   rounded-3xl bg-cover bg-center "
			style={{ backgroundImage: `url(/painter.png)` }}
		>
			<div className="flex-1 h-full  rounded-3xl flex items-center justify-center bg-gradient-to-b from-transparent to-light-white-100">
				<div className="mt-auto  ">
					<p className="text-sm  font-semibold text-gray my-2 text-gray ">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeServiceCard;

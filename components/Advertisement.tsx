import { advertisements } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Advertisement = () => {
	return (
		<div className="h-screen flex-1    max-w-[1000px] mt-2 mx-2 ">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
				{advertisements.map((ad) => (
					<div className=" py-4" key={ad.name}>
						<Image
							src={ad.image}
							alt={ad.name}
							className="bg-cover w-full h-full"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Advertisement;

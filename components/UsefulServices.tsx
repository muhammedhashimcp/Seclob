import { usefullServices } from '@/constants';
import React from 'react';

const UsefulServices = () => {
	return (
		<div className="w-full ">
			<div className=" max-w-[1000px] mx-auto">
				<div className=" ">
					<p className="text-gray-600 text-md font-bold ">
						Some of our services that will prove useful to you on a
						day-to-day basis are:
					</p>
				</div>

				<div className="grid grid-cols-4 gap-6 mt-4 ">
					{usefullServices.map(
						({ icon: IconComponent, title, text }) => (
							<div
								key={title}
								className="w-full flex items-center justify-center"
							>
								<div className="flex items-center justify-center   mx-auto ">
									<a href="#">
										<IconComponent className="w-12 h-full" />
									</a>
								</div>
								<div className="text- my-2 ml-2">
									<p className="text-sm  font-bold text-gray-600">
										{title}
									</p>
									<p className="text-xs text-justify   text-gray-600">
										{text}
									</p>
								</div>
							</div>
						)
					)}
				</div>
				<div className="my-4 ">
					<p className="text-sm  text-gray-600  text-justify ">
						Some of the other services that can be of assistance to
						you for leisure, health and home convenience are -
						Courier Service, Laundry Service, AC Repair, Thyrocare,
						Metropolis, Order Mineral Water, Book a Table, Doctor's
						Appointment, Order Food Online, etc.
					</p>
					<p className=" text-sm text-gray-600  text-justify my-4">
						With an endless number of things under the sun, you can
						be sure this will be your 'One Stop Shop' to find
						everything and more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default UsefulServices;

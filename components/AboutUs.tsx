import { AboutUsNavs } from '@/constants';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
	return (
		<div className="w-full ">
			<div className=" max-w-[1000px] mx-auto">
				<div className="aboutus max-w-[1000px] flex justify-around mx-auto">
					{AboutUsNavs.map((item) => (
						<Link
							key={item.title}
							href={item.url}
							className="item text-gray-600  space-x-4  "
						>
							{item.title}
						</Link>
					))}
				</div>
				<div className="my-2 py-2">
					<p className="text-sm text-gray-600  text-justify ">
						Welcome to Justdial, your 'one stop shop' where you are
						assisted with day-to-day and exclusive planning and
						purchasing activities. We take pride in our iconic
						customer support number, 8888888888 and the fact that we
						own a strong hold on local business information pan
						India.
					</p>
					<p className="text-sm  text-gray-600 py-2 text-justify leading-6">
						Our service extends from providing address and contact
						details of business establishments around the country,
						to making orders and reservations for leisure, medical,
						financial, travel and domestic purposes. We enlist
						business information across varied sectors like Hotels,
						Restaurants, Auto Care, Home Decor, Personal and Pet
						Care, Fitness, Insurance, Real Estate, Sports, Schools,
						etc. from all over the country. Holding information
						right from major cities like Mumbai, Delhi, Bangalore,
						Hyderabad, Chennai, Ahmedabad and Pune our reach
						stretches out to other smaller cities across the country
						too.
					</p>
					<p className="text-sm  text-gray-600 py-2 text-justify leading-6">
						Our 'Free Listing' feature gives a platform to showcase
						varied specialities. We then furnish you with the
						information via phone, SMS, web, App and WAP as well as,
						create a space for you to share your experiences through
						our 'Rate & Review' feature. Through the 'Best Deals',
						'Last Minute Deals' and 'Live Quotes', we make sure that
						you are offered the best bargains in the market.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;

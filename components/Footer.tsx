import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
	<footer className="flex flex-col text-black-100  mt-6  ">
		<div className="max-w-2xl  flex justify-center items-center flex-col mx-2 sm:mx-auto">
			<Image
				src="/seclob-logo-dark.png"
				alt="seclob-logo-dark"
				width={120}
				height={20}
			/>
			<p className="text-gray-600 my-4 text-sm text-center">
				Seclob brings the best of Home Maintenance and Repairs, Utility,
				Lifestyle, Health,
				<br /> Beauty Services, and Local Shopping to the customer,
				right where they are, all <br /> through an easy to use
				platform.
			</p>
		</div>
		<div className="bg-app-medium-gray flex justify-center items-center flex-wrap  mt-10  py-4 px-2 sm:px-auto ">
			<div className="">
				<Link href="/" className="text-gray-500 ">
					<p className="text-justify">
						Copyright 2022 Seclob Technologies Pvt.Ltd. All Rights
						Reserved | Designed & Developed by ERE Business
						Solutions
					</p>
				</Link>
			</div>
		</div>
	</footer>
);

export default Footer;

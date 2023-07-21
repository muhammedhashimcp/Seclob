'use client';
import SearchBar from './SearchBar';
import Services from './Services';
import Advertisement from './Advertisement';


const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById('discover');

		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const cardStyle = {
		backgroundImage: `url('/background.png')`,
	};

	return (
		<div className="w-full min-h-screen ">
			<div
				className="flex-1 pt-16 lg:pt-36 min-h-screen flex flex-col items-center -mt-10 bg-no-repeat"
				style={cardStyle}
			>
				<div className="max-width h-fit pt-16 my-10 flex justify-center items-center  padding-x">
					<h1 className="hero__title text-app-blue  ">
						What are you{' '}
						<span className="text-app_green">looking</span> for...?
					</h1>
				</div>
				<SearchBar />
				<Services />
				<Advertisement/>
			</div>
		</div>
	);
};

export default Hero;

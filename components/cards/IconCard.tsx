import React from 'react';
interface IIconCard {
	icon: React.ComponentType<any>;
	text: string;
}
const IconCard = ({ icon: IconComponent, text }: IIconCard) => {
	return (
		<div className="w-full flex-auto flex-center items-center justify-center">
			<div className="flex items-center justify-center h-16 w-16 mx-auto mt-4 bg-white rounded-full shadow-md">
				<a href="#">
					<IconComponent className="w-6 h-6" />
				</a>
			</div>
			<div className="text-center  py-3">
				<p className="text-sm  font-semibold text-white">{text}</p>
			</div>
		</div>
	);
};

export default IconCard;

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	isDisabled?: boolean;
	btnType?: 'button' | 'submit';
	containerStyles?: string;
	textStyles?: string;
	title: string;
	rightIcon?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface IIconCard {
	icon: React.ComponentType<any>;
	text: string;
}
export interface IServiceCard {
	img: string
	text: string;
}
export interface IStoreData {
	title: string;
	img: string;
	price: number;
	mrp: number;
}
export interface IStoreComp {
	title: string;
	data: IStoreData[];
}

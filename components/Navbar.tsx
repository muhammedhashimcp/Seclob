'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import CustomButton from './CustomButton';
import { locations, mobileNavLinks, navigation } from '@/constants';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
const NavBar = () => {
	const [location, setLocation] = useState(locations[0].name);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<header className="w-full top-0  fixed z-10 h-12  bg-navbar-bg">
				{/* Mobile menu button*/}
				<div className="absolute inset-y-0 py-4 px-4  left-0 flex items-center sm:hidden">
					<div className="" onClick={toggleMenu}>
						<Menu as="div" className="relative ">
							<div className="">
								{isMenuOpen ? (
									<Menu.Button>
										<XMarkIcon
											className="block h-6 w-6 text-gray-600"
											aria-hidden="true"
										/>
									</Menu.Button>
								) : (
									<Menu.Button>
										<Bars3Icon
											className="block h-6 w-6 text-gray-600 "
											aria-hidden="true"
										/>
									</Menu.Button>
								)}
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute px-10 mx-2 z-10  w-96 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									{mobileNavLinks.map((nav) => (
										<Menu.Item key={nav.name}>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block   py-2 text-sm text-gray-700'
													)}
												>
													{nav.name}
												</a>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
				<nav className="hidden max-w-[1440px]  mx-auto sm:flex justify-evenly items-center  py-4 bg-navbar-bg">
					<Link href="/" className="flex justify-center items-center">
						<Image
							className="h-8 w-auto"
							src="/seclob-logo.png"
							alt="Your Company"
							width={100}
							height={18}
						/>
					</Link>
					<div className="flex space-x-4">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current
										? ' text-green-600 font-normal'
										: 'text-primary-blue hover:bg-gray-700 hover:text-white',
									'rounded-md px-3 py-2 text-sm font-medium'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="flex items-center">
						<CustomButton
							title="Register as partner"
							btnType="button"
							containerStyles="bg-blue-500 text-white p-1 px-2     mx-2 rounded-md text-sm font-medium"
						/>
						<Menu as="div" className="relative ml-3">
							<div>
								<Menu.Button className="bg-blue-500 flex flex-row items-center text-white py-2  px-2   rounded-md  mx-2 text-sm font-medium">
									<span className="sr-only">
										Open locations
									</span>
									<span>{location}</span>
									<ChevronDownIcon
										className="h-5 w-5"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									{locations.map((location) => (
										<Menu.Item key={location.name}>
											{({ active }) => (
												<a
													href="#"
													className={classNames(
														active
															? 'bg-gray-100'
															: '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
												>
													{location.name}
												</a>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</Menu>

						<CustomButton
							title="Log in"
							btnType="button"
							containerStyles="bg-white text-blue-500 p-1 px-2     mx-2 rounded-md text-sm font-medium"
						/>
					</div>
				</nav>
			</header>
		</>
	);
};

export default NavBar;

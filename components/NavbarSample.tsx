'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'Offer', href: '#', current: false },
];
const navButtons = [
	{ name: 'Register as a parter ', href: '#', current: false },
	{ name: 'Offer', href: '#', current: false },
	{ name: 'Log in', href: '#', current: true },
];
const locations = [
	{ name: 'Kozhikode' },
	{ name: 'Malappuram' },
	{ name: 'Kannur' },
	{ name: 'Wayanad' },
];
function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
const NavBar = () => {
	const [location, setLocation] = useState('kozhikode');
	return (
		<Disclosure as="nav" className="bg-primary-blue-100">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-between sm:items-stretch ">
								<div className="flex flex-shrink-0 items-center">
									<Image
										className="h-8 w-auto"
										src="/seclob-logo.png"
										alt="Your Company"
										width={100}
										height={18}
									/>
								</div>

								<div className=" ">
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
												aria-current={
													item.current
														? 'page'
														: undefined
												}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
								<div>
									<div className=" flex items-center">
										<button
											title="Register as partner"
											type="button"
											className={`bg-blue-500 text-white p-1 px-2     mx-2 rounded-md text-sm font-medium`}
										>
											Register as partner
										</button>
										<Menu
											as="div"
											className="relative ml-3"
										>
											<div>
												<Menu.Button className="bg-blue-500 flex flex-row items-center text-white p-1 px-2   rounded-md  mx-2 text-sm font-medium">
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
													{locations.map(
														(location) => (
															<Menu.Item
																key={
																	location.name
																}
															>
																{({
																	active,
																}) => (
																	<a
																		href="#"
																		className={classNames(
																			active
																				? 'bg-gray-100'
																				: '',
																			'block px-4 py-2 text-sm text-gray-700'
																		)}
																	>
																		{
																			location.name
																		}
																	</a>
																)}
															</Menu.Item>
														)
													)}
												</Menu.Items>
											</Transition>
										</Menu>
										<button
											title="Register as partner"
											type="button"
											className={`bg-white text-blue-500 p-1 px-2     mx-2 rounded-md text-sm font-medium`}
										>
											Log in
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;

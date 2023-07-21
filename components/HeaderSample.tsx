'use client';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

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

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [location, setLocation] = useState('kozhikode');
	return (
		<Disclosure as="nav" className="bg-gray-800">
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
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
								<div className="flex flex-shrink-0 items-center">
									<Image
										className="h-8 w-auto"
										src="/seclob-logo.png"
										alt="Your Company"
										width={100}
										height={18}
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
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

								<div className="flex ">
									<button
										title="Register as partner"
										type="button"
										className={`bg-blue-500 text-white p-1 px-2     mx-2 rounded-md text-sm font-medium`}
									>
										Register as partner
									</button>
									<Menu as="div">
										<div className="">
											<Menu.Button className="bg-blue-500  text-white py-1 px-2   rounded-md  mx-2 text-sm font-medium">
												<span className="sr-only">
													Open locations
												</span>
												<div className=" flex flex-row items-center py-1">
													<span>{location}</span>
													<ChevronDownIcon
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</div>
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
													<Menu.Item
														key={location.name}
													>
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
									<button
										title="Register as partner"
										type="button"
										className={`bg-white text-blue-500 p-1 px-2     mx-2 rounded-md text-sm font-medium`}
									>
										Log in
									</button>
									{/* Profile dropdown */}
									{/* <Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="sr-only">
													Open user menu
												</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
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
												<Menu.Item>
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
															Your Profile
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
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
															Settings
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
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
															Sign out
														</a>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu> */}
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
}

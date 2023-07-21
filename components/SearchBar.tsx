'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CustomButton from './CustomButton';

const SearchBar = () => {
	return (
		<form className="  w-full ">
			<div className="input-container bg-white mx-auto max-w-2xl rounded-xl shadow-md shadow-slate-200 ">
				<MagnifyingGlassIcon className="h-5 w-5 mr-2 text-gray-600" />
				<input type="text" placeholder="Search anything....services" />
				<CustomButton
					title="Explore"
					btnType="button"
					containerStyles="bg-app_green text-white  px-2 py-0    mx-2 rounded-md text-sm font-medium"
				/>
			</div>
		</form>
	);
};

export default SearchBar;

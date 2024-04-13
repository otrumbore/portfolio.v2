'use client';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Socials = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<div className='hidden lg:block z-[999] fixed top-[40%] left-3'>
			<motion.div
				className='w-[4rem] h-[12rem] bg-zinc-100 bg-opacity-80 rounded-sm'
				initial={{ x: -100 }} // Initial position (off-screen from the left)
				animate={{ x: isVisible ? 0 : -100 }} // Final position (slide in from the left)
				transition={{ type: 'spring', damping: 30, stiffness: 100 }}
			>
				<ul className='flex flex-col justify-center items-center space-y-1 pt-4'>
					<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
						<FaLinkedinIn size={30} />
					</li>
					<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
						<FaGithub size={30} />
					</li>
					<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
						<MdAlternateEmail size={30} />
					</li>
				</ul>
			</motion.div>
		</div>
	);
};

export default Socials;

'use client';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const Socials = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<div className='hidden lg:block max-xl:hover:left-0 z-[999] fixed top-[40%] max-xl:-left-12 left-3 transform transition-all duration-300 ease-in-out'>
			<motion.div
				className='relative w-[4rem] h-[12rem] bg-gray-800 text-white bg-opacity-80 rounded-sm group'
				initial={{ x: -100 }} // Initial position (off-screen from the left)
				animate={{ x: isVisible ? 0 : -100 }} // Final position (slide in from the left)
				transition={{ type: 'spring', damping: 30, stiffness: 100 }}
			>
				<hr className='absolute xl:hidden right-2 top-[4.5rem] flex flex-col items-center border-2 h-11 group-hover:hidden'></hr>
				<TooltipProvider>
					<ul className='flex flex-col justify-center items-center space-y-1 pt-4'>
						<Tooltip>
							<TooltipTrigger>
								<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
									<a
										href='https://www.linkedin.com/in/odnel-trumbore'
										target='_blank'
									>
										<FaLinkedinIn size={30} />
									</a>
								</li>
								<TooltipContent side='right'>
									<p>LinkedIn</p>
								</TooltipContent>
							</TooltipTrigger>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
									<a href='https://www.github.com/otrumbore' target='_blank'>
										<FaGithub size={30} />
									</a>
								</li>
							</TooltipTrigger>
							<TooltipContent side='right'>
								<p>GitHub</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
									<a href='mailto:otrumbore@gmail.com' target='_blank'>
										<MdAlternateEmail size={30} />
									</a>
								</li>
							</TooltipTrigger>
							<TooltipContent side='right'>
								<p>Email Me!</p>
							</TooltipContent>
						</Tooltip>
					</ul>
				</TooltipProvider>
			</motion.div>
		</div>
	);
};

export default Socials;

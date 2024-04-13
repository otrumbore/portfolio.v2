'use client';

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const navItems = [
	{ id: 1, title: 'Home', link: '/' },
	{ id: 2, title: 'About', link: '/' },
	{ id: 3, title: 'Projects', link: '/' },
	{ id: 4, title: 'Contact', link: '/' },
];

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<header className='z-[999] relative flex justify-center'>
			<motion.div
				className='fixed top-4 px-4 lg:pr-10 lg:pl-8 w-[95%] lg:w-[98%] h-[5rem] bg-gray-800 text-white bg-opacity-80 rounded-xl'
				initial={{ y: -100 }}
				animate={{ y: isVisible ? 0 : -100 }}
				transition={{ type: 'spring', damping: 30, stiffness: 100 }}
			>
				<div className='w-full h-full flex justify-between items-center'>
					<div className='flex items-center'>
						<Avatar className='w-[50px] h-[50px]'>
							<AvatarImage src='https://avatars.githubusercontent.com/u/64494127?v=4' />
							<AvatarFallback>OT</AvatarFallback>
						</Avatar>
						<p className='hidden sm:block pl-4 text-xl'>Odnel Trumbore</p>
						<p className='pl-4 text-xl sm:hidden font-bold'>Odnel T.</p>
					</div>
					<nav className='flex items-center text-lg'>
						<ul className='hidden md:flex gap-16'>
							{navItems.map((item) => (
								<li key={item.id}>
									<a
										href={item.link}
										className='hover:underline underline-offset-8'
									>
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</motion.div>
		</header>
	);
};

export default Header;

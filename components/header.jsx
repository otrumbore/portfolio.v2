'use client';

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = [
	{ id: 1, title: 'Home', link: 'home' },
	{ id: 2, title: 'About', link: 'about' },
	{ id: 3, title: 'Projects', link: 'projects' },
	{ id: 4, title: 'Contact', link: 'contact' },
];

const Header = () => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		setIsHeaderVisible(true);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className='z-[50] relative flex justify-center'>
			<motion.div
				className='fixed top-4 px-4 lg:pr-10 lg:pl-8 w-[95%] lg:w-[98%] h-[5rem] bg-gray-800 text-white bg-opacity-80 rounded-xl'
				initial={{ y: -100 }}
				animate={{ y: isHeaderVisible ? 0 : -100 }}
				transition={{ type: 'spring', damping: 30, stiffness: 100 }}
			>
				<div className='w-full h-full flex justify-between items-center'>
					<a href='/'>
						<div className='flex items-center'>
							<span className='border-2 border-white rounded-full'>
								<Avatar className='w-[50px] h-[50px]'>
									<AvatarImage src='https://avatars.githubusercontent.com/u/64494127?v=4' />
									<AvatarFallback>OT</AvatarFallback>
								</Avatar>
							</span>

							<p className='hidden lg:block pl-4 text-xl'>Odnel Trumbore</p>
							<p className='pl-4 text-xl lg:hidden font-bold'>Odnel T.</p>
						</div>
					</a>

					<nav className='flex items-center text-lg'>
						<ul className='hidden md:flex gap-16'>
							{navItems.map((item) => (
								<li key={item.id}>
									<Link
										to={item.link}
										offset={-100}
										smooth={true}
										duration={500}
										className='hover:underline underline-offset-8 hover:cursor-pointer'
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
						{/* Mobile Menu */}
						<div className='block md:hidden' onClick={toggleMobileMenu}>
							<motion.div
								key={isMobileMenuOpen ? 'close-icon' : 'menu-icon'}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ duration: 0.25, ease: 'easeInOut' }}
							>
								{isMobileMenuOpen ? (
									<RiCloseLine size={35} />
								) : (
									<RiMenu5Line size={35} />
								)}
							</motion.div>
						</div>
						<motion.div
							className={`fixed z-[100] top-[6.5rem] right-0 h-auto w-full flex justify-center items-center md:hidden`}
							initial={{ translateX: '100%' }}
							animate={{ translateX: isMobileMenuOpen ? '0%' : '100%' }}
							transition={{ duration: 0.35, ease: 'easeInOut' }}
						>
							<div className='py-6 flex justify-center bg-gray-800 h-full w-[95%] bg-opacity-90 rounded-lg'>
								<ul className='w-full text-center text-lg font-semibold flex flex-col gap-6'>
									{navItems.map((item, index) => (
										<li
											key={item.id}
											className='flex flex-col justify-center items-center'
										>
											<Link
												to={item.link}
												onClick={toggleMobileMenu}
												offset={-100}
												smooth={true}
												duration={500}
											>
												{item.title}
											</Link>
											{index !== navItems.length - 1 && (
												<hr className='mt-6 w-[95%] border-1 border-gray-300' />
											)}
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					</nav>
				</div>
			</motion.div>
		</header>
	);
};

export default Header;

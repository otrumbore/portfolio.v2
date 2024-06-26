'use client';

import { Oswald } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const introFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Intro = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<motion.div
			name='home'
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.75 }}
			className='flex flex-col justify-center items-center h-screen max-lg:landscape:h-[150vh]'
		>
			<h1
				className={`${introFont.className} text-center text-6xl font-extrabold mb-16`}
			>
				<span className='sm:hidden'>Hi, I&apos;m Odnel</span>
				<span className='hidden sm:block'>Hi, I&apos;m Odnel Trumbore</span>
			</h1>

			<p className='text-2xl px-4 w-full text-center lg:w-1/2 mb-16'>
				As a dedicated Web Developer, I specialize in crafting and optimizing
				dynamic websites and web applications, driven by a passion for
				delivering innovative digital solutions that elevate user experiences
				and drive tangible results.
			</p>
			<Link
				to={'projects'}
				offset={-100}
				smooth={true}
				duration={500}
				className={buttonVariants({
					variant: 'main',
					size: 'intro',
					className: 'text-xl hover:cursor-pointer',
				})}
			>
				Projects
			</Link>
		</motion.div>
	);
};

export default Intro;

'use client';

import { Oswald } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const introFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Intro = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0 }} // Initial opacity (completely transparent)
			animate={{ opacity: isVisible ? 1 : 0 }} // Final opacity (fade in)
			transition={{ duration: 0.75 }} // Transition duration
			className='flex flex-col justify-center items-center h-screen'
		>
			<h1
				className={`${introFont.className} text-center text-6xl font-extrabold mb-16`}
			>
				Hey, I'm Odnel Trumbore
			</h1>

			<p className='text-2xl w-1/3 mb-16'>
				A Result-Oriented Web Developer building and managing Websites and Web
				Applications that leads to the success of the overall product
			</p>

			<Button variant='default' size={'intro'} className='text-lg'>
				Projects
			</Button>
		</motion.div>
	);
};

export default Intro;

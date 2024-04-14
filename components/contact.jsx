'use client';

import { Oswald } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const headingFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);
	return (
		<div className='relative' name='contact'>
			<div ref={ref} className='p-2 pt-24 bg-slate-100 min-h-screen h-auto'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className={`${headingFont.className} text-5xl text-center`}>
						Contact
					</h3>
					<span className='w-full flex justify-center p-4'>
						<hr className='border-4 w-[4rem] border-gray-800 rounded-lg' />
					</span>

					<div className='w-full flex justify-center'>
						<div className='w-full p-4 lg:w-1/2 flex flex-col justify-center items-center'>
							<p className='text-center mb-8 text-xl'>Lets get in touch!</p>
							<div className='w-full lg:w-2/3 flex flex-col gap-6'>
								<Input type='text' id='text' placeholder='Your Name' />
								<Input type='email' id='email' placeholder='Email' />
								<Input type='text' id='company' placeholder='You Company' />
								<Textarea placeholder='Type your message here...' />
								<span className='w-full flex justify-end'>
									<Button
										varient='main'
										size='intro'
										className='w-full lg:w-1/3'
									>
										Send Message
									</Button>
								</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;

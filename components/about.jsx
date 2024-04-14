'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});
	const skills = [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'Next.js',
		'Node.js',
		'PHP',
		'Git',
	];

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	return (
		<div name='about' id='about' className='relative'>
			<div ref={ref} className='p-8 bg-cyan-50 min-h-screen h-auto'>
				<motion.div
					initial={{ opacity: 0, y: -50 }} // Initial opacity and y position (above)
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} // Fade in when isVisible is true
					transition={{ duration: 0.5 }} // Transition duration
				>
					<h3 className='text-3xl text-center'>About</h3>
					<span className='w-full flex justify-center p-4'>
						<hr className='border-4 w-[4rem] border-gray-800 rounded-lg' />
					</span>

					<div className='w-full flex justify-center'>
						<div className='w-full p-4 lg:w-1/2'>
							<p className='text-center mb-8 text-xl'>
								Explore this section for additional insights into my background,
								expertise, and current proficiencies, primarily focusing on
								programming and technology.
							</p>
							<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
								<div className='w-full mb-8 lg:mb-0'>
									<h5 className='text-2xl pb-4 font-bold'>Who I am!</h5>
									<p className='text-xl'>
										I specialize in frontend development, crafting and
										overseeing the frontend aspects of websites and web
										applications to ensure their overall success. Explore my
										portfolio in the Projects section to see examples of my
										work.
										<br />
										<br />
										Additionally, I enjoy sharing insights gleaned from my years
										of experience in web development with the broader developer
										community. Connect with me on{' '}
										<a
											href='https://www.linkedin.com/in/odnel-trumbore'
											className='underline underline-offset-4 text-slate-700 font-semibold'
										>
											LinkedIn
										</a>{' '}
										for valuable content on web development and programming.
										<br />
										<br />
										I'm actively seeking new job opportunities where I can apply
										my skills, learn, and advance professionally. If you have a
										fitting opportunity, I'm eager to hear from you.
									</p>
								</div>
								<div className='w-full'>
									<h5 className='text-2xl mb-8 font-bold'>Skills...</h5>
									<div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
										{skills.map((skill) => (
											<span
												key={skill}
												className='bg-gray-200 rounded-md text-gray-600 text-center py-3'
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;

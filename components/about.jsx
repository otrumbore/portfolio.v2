'use client';

import { Oswald } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const headingFont = Oswald({ subsets: ['latin'], weight: ['600'] });

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
		'Tailwind',
	];

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	return (
		<div name='about' id='about' className='relative'>
			<div ref={ref} className='p-8 pt-24 bg-cyan-50 min-h-screen h-auto'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className={`${headingFont.className} text-5xl text-center`}>
						About
					</h2>
					<span className='w-full flex justify-center p-4'>
						<hr className='border-4 w-[4rem] border-gray-800 rounded-lg' />
					</span>

					<div className='w-full flex justify-center'>
						<div className='w-full p-4 xl:w-10/12 2xl:w-10/12'>
							<p className='text-center text-xl'>
								Explore this section for additional insights into my background,
								expertise, and current proficiencies, primarily focusing on
								programming and technology.
							</p>
							<div className='w-full mt-12 flex flex-col lg:flex-row lg:justify-between gap-x-24 gap-y-8'>
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
										community. Connect with me on
										<a
											href='https://www.linkedin.com/in/odnel-trumbore'
											className='underline underline-offset-4 text-slate-700 font-semibold'
										>
											LinkedIn
										</a>
										for valuable content on web development and programming.
										<br />
										<br />
										I&apos;m actively seeking new job opportunities where I can
										apply my skills, learn, and advance professionally. If you
										have a fitting opportunity, I&apos;m eager to hear from you.
									</p>
									<Link
										to={'contact'}
										offset={-100}
										smooth={true}
										duration={500}
										className={buttonVariants({
											variant: 'main',
											size: 'intro',
											className: 'mt-14 text-xl w-full hover:cursor-pointer',
										})}
									>
										Get in touch!
									</Link>
								</div>
								<div className='w-full'>
									<h5 className='text-2xl mb-8 font-bold'>Skills...</h5>
									<div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
										{skills.map((skill) => (
											<span
												key={skill}
												className='bg-gray-200 rounded-md text-gray-600 text-center py-3 px-2 xl:max-w-36'
											>
												<p className='break-words'>{skill}</p>
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

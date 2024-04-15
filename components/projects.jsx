'use client';

import { Oswald } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

//Images for projects
import LCCImg from '@/public/project_imgs/Project_LCC_W_Mobile.png';
import PortfolioV1Img from '@/public/project_imgs/Project_Portfolio_V1.png';
import PortfolioV2Img from '@/public/project_imgs/Project_Portfolio_V2.png';

const headingFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Projects = () => {
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
		<div className='relative' name='projects'>
			<div ref={ref} className='p-8 pt-24 bg-zinc-100 min-h-screen h-auto'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
					transition={{ duration: 0.5 }}
				>
					<h3 className={`${headingFont.className} text-5xl text-center`}>
						Projects
					</h3>
					<span className='w-full flex justify-center p-4'>
						<hr className='border-4 w-[4rem] border-gray-800 rounded-lg' />
					</span>
					<div className='w-full flex flex-col justify-center items-center gap-4'>
						<div className='w-full p-4 xl:w-2/3'>
							<p className='text-center mb-8 text-2xl font-semibold'>
								Professional Projects
							</p>
							<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
								<div className='flex flex-col'>
									<h4 className='text-center text-xl font-semibold'>
										<a href='https://louisascraftycorner.com' target='_blank'>
											Louisa&apos;s Crafty Corner
										</a>
									</h4>
									<div className='flex flex-col lg:flex-col'>
										<a
											href='https://louisascraftycorner.com'
											target='_blank'
											className='hover:scale-110'
										>
											<Image
												src={LCCImg}
												width={500}
												height={500}
												alt='Picture of the author'
											/>
										</a>

										<div className='mt-4 flex flex-col gap-4 w-full items-center justify-center'>
											<p>E-Commerce Store</p>
											<p className='w-full text-center'>
												<span className='font-semibold'>Tech Stack: </span>
												MERN Stack: MongoDB, Express.js, React.js, Node.js with
												Tailwind
											</p>
										</div>
									</div>
								</div>
								<div className='flex flex-col'>
									<h4 className='text-center text-xl font-semibold'>
										<a href='#' target='_blank'></a>
									</h4>
									<div className='flex flex-col lg:flex-col'>
										<a href='#' target='_blank' className='hover:scale-110'>
											{/* <Image
												src={LCCImg}
												width={500}
												height={500}
												alt='Picture of the author'
											/> */}
										</a>

										<div className='mt-4 flex flex-col gap-4 w-full items-center justify-center'>
											<p></p>
											<p className='w-full text-center'>
												<span className='font-semibold'></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full p-4 xl:w-2/3'>
							<p className='text-center mb-8 text-2xl font-semibold'>
								Personal Projects
							</p>
							<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6'>
								<div className='flex flex-col'>
									<h4 className='text-center text-xl font-semibold'>
										Portfolio V2
									</h4>
									<div className='flex flex-col lg:flex-col'>
										<Image
											src={PortfolioV1Img}
											width={500}
											height={500}
											alt='Picture of the author'
										/>
										<div className='mt-4 flex flex-col gap-4 w-full items-center justify-center'>
											<p>New portfolio you are currently viewing</p>
											<p className='w-full text-center'>
												<span className='font-semibold'>Tech Stack: </span>
												Next.js, Tailwind, Shadcn UI, Framer Motion
											</p>
										</div>
									</div>
								</div>
								<div className='flex flex-col'>
									<h4 className='text-center text-xl font-semibold'>
										Portfolio V1
									</h4>
									<div className='flex flex-col lg:flex-col'>
										<Image
											src={PortfolioV1Img}
											width={500}
											height={500}
											alt='Picture of the author'
										/>
										<div className='mt-4 flex flex-col gap-4 w-full items-center justify-center'>
											<p>My original and first portfolio.</p>
											<p className='w-full text-center'>
												<span className='font-semibold'>Tech Stack: </span>
												React, Tailwind
											</p>
										</div>
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

export default Projects;

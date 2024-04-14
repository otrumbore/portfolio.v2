import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='w-full flex justify-center bg-gray-800 h-auto lg:h-[20rem] bg-opacity-80 p-4'>
			<div className='flex flex-col justify-evenly w-full lg:w-2/3 h-full'>
				<div className='flex flex-col text-center lg:text-left lg:flex-row justify-between text-gray-200'>
					<div className='w-full lg:w-1/2 space-y-2'>
						<h6 className='text-xl font-semibold'>Odnel Trumbore</h6>
						<p className='text-md font-thin'>
							As a dedicated Web Developer, I specialize in crafting and
							optimizing dynamic websites and web applications, driven by a
							passion for delivering innovative digital solutions that elevate
							user experiences and drive tangible results.
						</p>
					</div>
					<div className='w-full flex justify-center lg:block lg:w-1/2 lg:text-right'>
						<div>
							{/* <h6 className='text-xl font-semibold'>Socials</h6> */}
							<TooltipProvider>
								<ul className='flex justify-end items-center space-y-1 pt-4'>
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
											<TooltipContent side='top'>
												<p>LinkedIn</p>
											</TooltipContent>
										</TooltipTrigger>
									</Tooltip>
									<Tooltip>
										<TooltipTrigger>
											<li className='border-2 border-transparent hover:border-gray-300 p-[.50rem] rounded-md hover:shadow-lg shawdow-gray-200 cursor-pointer'>
												<a
													href='https://www.github.com/otrumbore'
													target='_blank'
												>
													<FaGithub size={30} />
												</a>
											</li>
										</TooltipTrigger>
										<TooltipContent side='top'>
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
										<TooltipContent side='top'>
											<p>Email Me!</p>
										</TooltipContent>
									</Tooltip>
								</ul>
							</TooltipProvider>
						</div>
					</div>
				</div>
				<div className='w-full text-center text-sm'>
					<hr className='border-t-2 w-full pb-8 border-gray-300 border-opacity-50' />
					<p className='text-gray-200'>
						&copy; Copyright 2024. Made by Odnel Trumbore
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

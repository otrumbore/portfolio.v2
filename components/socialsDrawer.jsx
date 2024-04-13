'use client';

import React, { useEffect, useState } from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';
import { Button } from './ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const SocialsDrawer = () => {
	const [socialDrawerBtn, setSocialDrawerBtn] = useState(false);
	const toggleSocialDrawerBtn = () => {
		setSocialDrawerBtn(!socialDrawerBtn);
	};
	useEffect(() => {
		setSocialDrawerBtn(true);
	}, []);
	return (
		<div className='lg:hidden z-[999] fixed bottom-2 right-2'>
			<div
				className={`${
					socialDrawerBtn ? 'block' : 'hidden'
				} w-xl h-xl bg-gray-800 text-white px-3 pt-2 pb-1 rounded-md bg-opacity-80`}
			>
				<Drawer onClose={toggleSocialDrawerBtn}>
					<DrawerTrigger>
						<IoShareSocialSharp onClick={toggleSocialDrawerBtn} size={30} />
					</DrawerTrigger>
					<DrawerContent className='bg-gray-800 text-white'>
						<DrawerHeader>
							<DrawerTitle className='text-center'>
								Catch me off my portfolio, how bout dat?
							</DrawerTitle>
							<DrawerDescription className='mt-4'>
								<ul className='flex justify-center items-center gap-14 text-white'>
									<li>
										<a
											href='https://www.linkedin.com/in/odnel-trumbore'
											target='_blank'
										>
											<FaLinkedinIn size={30} />
										</a>
									</li>
									<li>
										<a href='https://www.github.com/otrumbore' target='_blank'>
											<FaGithub size={30} />
										</a>
									</li>
									<li>
										<a href='mailto:otrumbore@gmail.com' target='_blank'>
											<MdAlternateEmail size={30} />
										</a>
									</li>
								</ul>
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose>
								<Button variant='default' className='w-full max-w-md'>
									Close
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</div>
	);
};

export default SocialsDrawer;

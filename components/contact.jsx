'use client';

import { Oswald } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BiErrorAlt } from 'react-icons/bi';
import { useToast } from '@/components/ui/use-toast';

const headingFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Contact = () => {
	const { toast } = useToast();
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		};

		try {
			const response = await fetch('api/mailer', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Email sent successfully');
				toast({
					title: 'Email Sent',
					description: 'Email sent successfully',
					className: 'bg-green-300',
				});
				e.target.reset();
			} else {
				toast({
					title: 'Email Not Sent',
					description:
						'There was an error sending the email. Please try again!',
					className: 'bg-red-300',
				});
				console.error('Error:', response.statusText);
			}
		} catch (error) {
			toast({
				title: 'Email Not Sent',
				description: 'There was an error sending the email. Please try again!',
				className: 'bg-red-300',
			});
			console.error('Error:', error);
		}
	};

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
						<div className='w-full p-4 2xl:w-1/2 flex flex-col justify-center items-center'>
							<p className='text-center mb-8 text-xl'>Let's get in touch!</p>
							<form
								onSubmit={handleSubmit}
								className='w-full lg:w-2/3 flex flex-col gap-6'
							>
								<Input
									type='text'
									id='name'
									name='name'
									placeholder='Your Name'
								/>
								<Input
									type='email'
									id='email'
									name='email'
									placeholder='Email'
								/>
								<Textarea
									id='message'
									name='message'
									placeholder='Type your message here...'
								/>
								<span className='w-full flex justify-end'>
									<Button
										variant='main'
										size='intro'
										className='w-full lg:w-1/3'
										type='submit'
									>
										Send Message
									</Button>
								</span>
							</form>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;

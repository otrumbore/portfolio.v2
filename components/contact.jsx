'use client';

import { Oswald } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import { MdOutlineMarkEmailRead } from 'react-icons/md';

const headingFont = Oswald({ subsets: ['latin'], weight: ['600'] });

const Contact = () => {
	const { toast } = useToast();
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		message: false,
		error: [],
	});

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	useEffect(() => {
		errors.name
			? errors.error.push('A name must be entered!')
			: errors.email
			? errors.error.push('A valid email must be entered!')
			: errors.message
			? errors.error.push('A message must be entered!')
			: '';
	}, [errors]);

	const validateEmail = (email) => {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const validateField = (name, value) => {
		switch (name) {
			case 'email':
				if (!validateEmail(value)) return 'A valid email must be entered!';
				break;
			case 'name':
			case 'message':
				if (value.trim() === '') return `A ${name} must be entered!`;
				break;
			default:
				return '';
		}
		return '';
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		const errorMessage = validateField(name, value);

		setContactData((prevState) => ({
			...prevState,
			[name]: value,
		}));

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: errorMessage,
		}));
	};

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
					variant: 'success',
					type: 'success',
					title: 'Email Sent',
					description: 'Email sent successfully',
				});
				e.target.reset();
			} else {
				toast({
					variant: 'destructive',
					title: 'Uh oh! Something went wrong.',
					description:
						'There was an error sending the email. Please try again!',
					//action: <ToastAction altText="Try again">Try again</ToastAction>,
				});
				console.error('Error:', response.statusText);
			}
		} catch (error) {
			toast({
				variant: 'destructive',
				title: 'Uh oh! Something went wrong.',
				description: 'There was an error sending the email. Please try again!',
				//action: <ToastAction altText="Try again">Try again</ToastAction>,
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
						<div className='w-full p-4 2xl:w-2/3 flex flex-col justify-center items-center'>
							{(errors.name || errors.email || errors.message) && (
								<div className='mb-8 w-full flex flex-col lg:max-w-[67%] bg-red-300 border border-black px-4 py-2 rounded-md'>
									<span>{errors.name && errors.name}</span>
									<span>{errors.email && errors.email}</span>
									<span>{errors.message && errors.message}</span>
								</div>
							)}

							<p className='text-center mb-8 text-xl'>
								Let&apos;s get in touch!
							</p>
							<form
								onSubmit={handleSubmit}
								className='w-full lg:w-2/3 flex flex-col gap-6'
							>
								<Input
									type='text'
									id='name'
									name='name'
									placeholder='Name'
									onChange={handleChange}
									value={contactData.name}
									className={errors.name ? 'border-red-600' : ''}
								/>
								<Input
									type='email'
									id='email'
									name='email'
									onChange={handleChange}
									value={contactData.email}
									placeholder='Email'
									className={errors.email ? 'border-red-600' : ''}
								/>
								<Textarea
									id='message'
									name='message'
									placeholder='Message...'
									onChange={handleChange}
									value={contactData.message}
									className={errors.message ? 'border-red-600' : ''}
								/>
								<span className='w-full flex justify-end'>
									<Button
										variant='main'
										size='intro'
										className='w-full lg:w-1/3'
										type='submit'
										disabled={
											!(
												contactData.name &&
												contactData.email &&
												contactData.message
											)
										}
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

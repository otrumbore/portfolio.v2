'use client';

import {
	Toast,
	ToastClose,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { ImCheckmark } from 'react-icons/im';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(function ({
				id,
				title,
				description,
				action,
				type,
				...props
			}) {
				return (
					<Toast key={id} {...props}>
						<div className='grid gap-1'>
							<div className='flex gap-4'>
								{type && type === 'success' ? <ImCheckmark size={15} /> : ''}
								{title && <ToastTitle>{title}</ToastTitle>}
							</div>

							{description && (
								<ToastDescription>{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}

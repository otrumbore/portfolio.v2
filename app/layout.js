import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Socials from '@/components/socials';
import HeroImage from '@/public/hero.webp';

const font = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
	title: "Odnel's Portfolio",
	description:
		'Odnel is a frontend developer with backend experience. Web developemnt over 10+ years!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${font.className} bg-gray-300 text-gray-900`}>
				<div
					className='h-screen w-full bg-cover bg-center -z-10'
					style={{ backgroundImage: `url(${HeroImage.src})` }}
				>
					<Header />
					<Socials />
					<div className=''>{children}</div>
				</div>
			</body>
		</html>
	);
}

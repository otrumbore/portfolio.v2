import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Socials from '@/components/socials';
import HeroImage from '@/public/hero.webp';
import SocialsDrawer from '../components/socialsDrawer';
import Intro from '@/components/intro';
import Footer from '../components/footer';
import { Toaster } from '@/components/ui/toaster';

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
				<Header />
				<main>
					<Socials />
					<SocialsDrawer />
					<div className='relative h-auto lg:h-screen w-full overflow-hidden'>
						<div
							className='absolute inset-0 bg-cover bg-center -z-[1]'
							style={{ backgroundImage: `url(${HeroImage.src})` }}
						></div>
						<Intro />
					</div>
					<div className=''>{children}</div>
				</main>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}

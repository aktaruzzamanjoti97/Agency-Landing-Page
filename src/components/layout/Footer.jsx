import Logo from '../icons/Logo';
import {
	DribbleIcon,
	FacebookIcon,
	GithubIcon,
	InstagramIcon,
	TwitterIcon,
} from '../icons/SocialIcons';

const Footer = () => {
	const footerLinks = {
		company: ['About', 'Careers', 'Brand Center', 'Blog'],
		helpCenter: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'],
		legal: ['Privacy Policy', 'Licensing', 'Terms'],
		company2: ['About', 'Careers', 'Brand Center', 'Blog'],
		download: ['iOS', 'Android', 'Windows', 'MacOS'],
	};

	const socialLinks = [
		{ icon: <FacebookIcon />, href: '#' },
		{ icon: <InstagramIcon />, href: '#' },
		{ icon: <TwitterIcon />, href: '#' },
		{ icon: <GithubIcon />, href: '#' },
		{ icon: <DribbleIcon />, href: '#' },
	];

	return (
		<footer className='bg-white dark:bg-gray-800'>
			<div className='max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10'>
				{/* <!-- Sub Footer 1 --> */}
				<div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
					<div>
						<h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
							Company
						</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{footerLinks.company.map((link) => (
								<li className='mb-4'>
									<a href='#' className=' hover:underline'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
							Help center
						</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{footerLinks.helpCenter.map((link) => (
								<li className='mb-4'>
									<a href='#' className=' hover:underline'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
							Legal
						</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{footerLinks.legal.map((link) => (
								<li className='mb-4'>
									<a href='#' className=' hover:underline'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
							Company
						</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{footerLinks.company2.map((link) => (
								<li className='mb-4'>
									<a href='#' className=' hover:underline'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
							Download
						</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{footerLinks.download.map((link) => (
								<li className='mb-4'>
									<a href='#' className=' hover:underline'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

				{/* <!-- Sub Footer 2 --> */}
				<div className='text-center'>
					<a
						href='#'
						className='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white'>
						<Logo className='h-6 mr-3 sm:h-9' />
						Learn with Joti
					</a>
					<span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
						© 2024-2025 Learn with Sumit. All Rights Reserved. Built with{' '}
						<a
							href='#'
							target='_blank'
							className='text-purple-600 hover:underline dark:text-purple-500'>
							Flowbite
						</a>{' '}
						and{' '}
						<a
							href='#'
							className='text-purple-600 hover:underline dark:text-purple-500'>
							Tailwind CSS
						</a>
						.
					</span>
					<ul className='flex justify-center mt-5 space-x-5'>
						{socialLinks.map((social, index) => (
							<li key={index}>
								<a
									href={social.href}
									className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

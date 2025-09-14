import {
	AirbnbLogo,
	GoogleLogo,
	MailChimpLogo,
	MashableLogo,
	MicrosoftLogo,
	SpotifyLogo,
} from '../icons/CompanyLogos';

const CompaniesSection = () => {
	const companyLogos = [
		{ name: 'AirBnb', logo: <AirbnbLogo />, href: '#' },
		{ name: 'AirBnb', logo: <GoogleLogo />, href: '#' },
		{ name: 'AirBnb', logo: <MicrosoftLogo />, href: '#' },
		{ name: 'AirBnb', logo: <SpotifyLogo />, href: '#' },
		{ name: 'AirBnb', logo: <MailChimpLogo />, href: '#' },
		{ name: 'AirBnb', logo: <MashableLogo />, href: '#' },
	];

	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16'>
				<div className='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400'>
					{companyLogos.map((company) => (
						<a
							href={company.href}
							className='flex items-center lg:justify-center'>
							{company.logo}
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default CompaniesSection;

import FeatureCard from '../ui/FeatureCard';

const FeaturesSection = () => {
	const features = [
		{
			title: 'Work with tools you already use',
			description:
				'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
			image: '/assets/features/feature-1.png',
			imagePosition: 'right',
			bulletPoints: [
				'Continuous integration and deployment',
				'Development workflow',
				'Knowledge management',
			],
			additionalText:
				'Deliver great service experiences fast - without the complexity of traditional ITSM solutions.',
		},
		{
			title: "We invest in the world's potential",
			description:
				'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
			image: '/assets/features/feature-2.png',
			imagePosition: 'left',
			bulletPoints: [
				'Dynamic reports and dashboards',
				'Templates for everyone',
				'Development workflow',
				'Limitless business automation',
				'Knowledge management',
			],
			additionalText:
				'Deliver great service experiences fast - without the complexity of traditional ITSM solutions.',
		},
	];

	return (
		<section className='bg-gray-50 dark:bg-gray-800'>
			<div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
				{features.map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>
		</section>
	);
};

export default FeaturesSection;

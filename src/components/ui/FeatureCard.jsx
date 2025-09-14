import CheckIcon from '../icons/CheckIcon';

const FeatureCard = ({
	title,
	description,
	image,
	imagePosition,
	bulletPoints,
	additionalText,
}) => {
	const isImageRight = imagePosition === 'right';

	return (
		<div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
			{!isImageRight && (
				<img
					className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
					src={image}
					alt='feature image 2'
				/>
			)}
			<div className='text-gray-500 sm:text-lg dark:text-gray-400'>
				<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h2>
				<p className='mb-8 font-light lg:text-xl'>{description}</p>

				<ul
					role='list'
					className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'>
					{bulletPoints.map((point, index) => (
						<li className='flex space-x-3' key={index}>
							<CheckIcon />
							<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
								{point}
							</span>
						</li>
					))}
				</ul>

				<p className='mb-8 font-light lg:text-xl'>{additionalText}</p>
			</div>
			{isImageRight && (
				<img
					className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
					src={image}
					alt='dashboard feature image'
				/>
			)}
		</div>
	);
};

export default FeatureCard;

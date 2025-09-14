const FAQItem = ({ question, answer, additionalInfo, isOpen, onClick }) => {
	return (
		<div
			id='accordion-flush'
			data-accordion='collapse'
			data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
			data-inactive-classes='text-gray-500 dark:text-gray-400'>
			<h3 id='accordion-flush-heading-1'>
				<button
					type='button'
					className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
					onClick={onClick}>
					<span>{question}</span>
					<svg
						data-accordion-icon=''
						className={`w-6 h-6 ${isOpen ? 'rotate-180' : ''} shrink-0`}
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clip-rule='evenodd'></path>
					</svg>
				</button>
			</h3>
			{isOpen && (
				<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
					<p className='mb-2 text-gray-500 dark:text-gray-400'>{answer}</p>
					<p className='text-gray-500 dark:text-gray-400'>
						{additionalInfo}
					</p>
				</div>
			)}
			{/* <div
				id='accordion-flush-body-1'
				className=''
				aria-labelledby='accordion-flush-heading-1'>
			</div> */}
		</div>
	);
};

export default FAQItem;

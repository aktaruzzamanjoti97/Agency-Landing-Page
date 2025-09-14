import { useState } from 'react';
import FAQItem from '../ui/FAQItem';

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: 'Can I use Landwind in open-source projects?',
			answer: `Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.`,
			additionalInfo:
				'Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.',
		},
		{
			question: 'Is there a Figma file available?',
			answer:
				'Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
			additionalInfo:
				'Check out the Figma design system based on the utility classes from Tailwind CSS and components from Landwind.',
		},
		{
			question: 'What are the differences between Landwind and Tailwind UI?',
			answer:
				'The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
			additionalInfo:
				'However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.',
		},
		{
			question: 'What about browser support?',
			answer:
				'The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
			additionalInfo:
				'However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.',
		},
	];

	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 '>
				<h2 className='mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white'>
					Frequently asked questions
				</h2>
				<div className='max-w-screen-md mx-auto'>
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							{...faq}
							isOpen={openIndex === index}
							onClick={() =>
								setOpenIndex(openIndex === index ? -1 : index)
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CompaniesSection from './components/sections/CompaniesSection';
import FAQSection from './components/sections/FAQSection';
import FeaturesSection from './components/sections/FeaturesSection';
import HeroSection from './components/sections/HeroSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialSection from './components/sections/TestimonialSection';
import TrialSection from './components/sections/TrialSection';
import TrustedSection from './components/sections/TrustedSection';

function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<CompaniesSection />
				<FeaturesSection />
				<TrustedSection />
				<TestimonialSection />
				<PricingSection />
				<FAQSection />
				<TrialSection />
			</main>
			<Footer />
		</>
	);
}

export default App;

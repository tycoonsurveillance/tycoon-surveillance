import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import AdvancedFeatures from "./components/AdvancedFeatures";
import TechnicalSupport from "./components/TechnicalSupport";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import Faqsection from "./components/Faqsection";
import FeatureBlogs from "./components/FeatureBlogs";
// import FooterContactBar from "./components/FooterContactBar";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhatWeDo />
      <WhyChooseUs />
      <AdvancedFeatures />
      <TechnicalSupport />
      <ContactSection />
      <Testimonials />
      <Faqsection />
      <FeatureBlogs />
      {/* <FooterContactBar /> */}
    </>
  );
};

export default Home;
